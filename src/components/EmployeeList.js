import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState,useEffect,useRef} from 'react'

 //npm install react-to-print
 import { useReactToPrint } from 'react-to-print'



export const  EmployeeList=()=>{
//crs
  const createPDF =useRef();

  const [ employeeList,setEmployeeList ] = useState(null)
  const navigate=useNavigate();

//edit method
  const empedit=(id)=>{
    navigate("/employeeEdit/"+id)
  }
  //delete method
  const empdelete =(id) =>{
    if(window.confirm('Do you want to remove?'))
    fetch("http://localhost:3000/employee/"+id,{
      method:"DELETE",
      headers:{"content-type":"application/json"},
      body:JSON.stringify()
   }).then((res) => {
           alert(' Deleted successfully ')
         window.location.reload();
       })
       .catch((err)=>console.log(err.message))
    
  }


 useEffect(()=>{
   fetch("http://localhost:3000/employee").then((res)=>{
    return res.json();
   })
    .then((resp)=>{
      setEmployeeList(resp);
    })
    .catch((error)=>{
      console.log(error.message);
    })
 },[])


 const generatePDf= useReactToPrint({
    content: ()=>createPDF.current,
    documentTitle:"empdata",
    onAfterPrint:()=>alert("Data saved in PDF Format")
 });


  return (
    <div>
    <div className='main'>
    <h1 className='main1'>Dashboard</h1>
      <Link to="/registration" className="btn btn-success" id='main2'>Add Employee</Link>
      <button  className="btn btn-success" id='main3' onClick={generatePDf}>PDF </button>
    </div>
    <div ref={createPDF} style={{width:"100%"}}>
    <table class="table table-dark table-striped" >
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Firstname</th>
        <th scope="col">Lastname</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Mobilenumber</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
       { employeeList &&
        employeeList.map(item=>(
          <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.mobilenumber}</td>
        <td>
          <a onClick={()=>{empedit( item.id)}} className='btn btn-primary' id='edit1'>Edit</a>
          <a onClick={()=>{empdelete( item.id)}} className='btn btn-danger'>Delete</a>
        </td>

      </tr>
        ))
       }
      
     
    </tbody>
  </table>
  </div>
  </div>
  );
    

  
}
