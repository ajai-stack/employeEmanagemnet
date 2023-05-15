import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'


export const EmployeeEdit =() =>{

    const empid= useParams();
    //console.log(empid)
    const  empdata=Object.values(empid)
   // console.log(empdata)


    useEffect(()=>{
        fetch("http://localhost:3000/employee/"+empdata).then((res)=>{
         return res.json();
        })
         .then((resp)=>{
            setFirstName(resp.firstname);
            setLastName(resp.lastname);
            setEmail(resp.email);
            setPassword(resp.password);
            setMobileNumber(resp.mobilenumber);
         })
         .catch((error)=>{
           console.log(error.message);
         })
      },[])

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobilenumber, setMobileNumber] =useState("");
    const navigate=useNavigate();
    

        const onSubmit = (e) =>{
          e.preventDefault();
        //  console.log({firstname,lastname,email,password,mobilenumber})
          const  request= {firstname,lastname,email,password,mobilenumber}
        
           
           fetch("http://localhost:3000/employee/"+empdata,{
           method:"PUT",
           headers:{"content-type":"application/json"},
           body:JSON.stringify(request)
        }).then((res) => {
                alert(' update successfully ')
                navigate('/employeeList')
            })
            .catch((err)=>console.log(err.message))
        }
    
        return(
            <div className="one">
            <form className='Fields'  onSubmit={onSubmit}>
            <TextField  id="outlined1"  value={firstname} onChange={event=>setFirstName(event.target.value)} className="trim" label="firstname" type="text" variant="outlined" />
             <br/><br/>
            <TextField id="outlined2" value={lastname} onChange={event=>setLastName(event.target.value)}
             className="trim" label="lastname"  type="text" variant="outlined" />
            <br/><br/>
            <TextField id="outlined3" value={email} onChange={event=>setEmail(event.target.value)}
             className="trim" label="email" type="text"variant="outlined" />
            <br/><br/>
            <TextField id="outlined4" value={password} onChange={event=>setPassword(event.target.value)} 
            className="trim" label="password" type="text" variant="outlined" />
            <br/><br/>
            <TextField id="outlined5" value={mobilenumber} onChange={event=>setMobileNumber(event.target.value)}
             className="trim" label="mobilenumber" type="number" variant="outlined"/>
            <br/><br/>
            <button  className="lable">Update</button>
            </form>
            </div>
        )
    }     