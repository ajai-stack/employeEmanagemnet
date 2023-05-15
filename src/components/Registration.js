import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Registration =() =>{

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
    
       
       fetch("http://localhost:3000/employee",{
       method:"POST",
       headers:{"content-type":"application/json"},
       body:JSON.stringify(request)
    }).then((res) => {
            alert(' register successfully ')
            navigate('/employeeList')
        })
        .catch((err)=>console.log(err.message))
    }

    return(
        <div className="one">
        <form className='Fields'  onSubmit={onSubmit}>
        <h3 className='child  '>Registration Form</h3>
        <TextField  id="outlined1"  value={firstname} onChange={event=>setFirstName(event.target.value)}
         className="trim" label="firstname" type="text" variant="outlined" required/>
         <br/><br/>
        <TextField id="outlined2" value={lastname} onChange={event=>setLastName(event.target.value)}
         className="trim" label="lastname"  type="text" variant="outlined" required/>
        <br/><br/>
        <TextField id="outlined3" value={email} onChange={event=>setEmail(event.target.value)}
         className="trim" label="email" type="text"variant="outlined" required/>
        <br/><br/>
        <TextField id="outlined4" value={password} onChange={event=>setPassword(event.target.value)} 
        className="trim" label="password" type="password" variant="outlined" required/>
        <br/><br/>
        <TextField id="outlined5" value={mobilenumber} onChange={event=>setMobileNumber(event.target.value)}
         className="trim" label="mobilenumber" type="number" variant="outlined" required/>
        <br/><br/>
        <input type="submit" className='label'/>
        </form>
        </div>
    )
}     