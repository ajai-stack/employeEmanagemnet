import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Registration } from './components/Registration'
import { EmployeeList } from './components/EmployeeList'
import { Employee } from './components/Employee';
import {EmployeeEdit} from './components/EmployeeEdit'
import { Home } from './components/Home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Employee />
        <Routes>
        <Route path="/home" element= {<Home/>} />    
          <Route path="/registration" element= {<Registration/>} />
          <Route path="/employeeList" element= {<EmployeeList/>} />
          <Route path="/employeeEdit/:id" element= {<EmployeeEdit/>} />
        </Routes>
      </Router>
   

   
  </div>
  
  )
  }

export default App
