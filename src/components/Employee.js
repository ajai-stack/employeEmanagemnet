import { React } from 'react';
import { Link } from 'react-router-dom';
import { AppBar,Toolbar,CssBaseline,Typography } from "@material-ui/core";

export const Employee =()=>{  
    return(
      <>
      <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className="header" >
          <Link to="/Home" id='num'>EMPLOYEE MANAGEMENT</Link>
       
        </Typography>
          <div className="NewLink">
          <Link to="/Home" className="link1" >
              Home
            </Link>
            <Link to="/registration" className="link1" >
              Registration
            </Link>
            <Link to="/employeelist" className="link2">
              EmployeeList
            </Link>
          </div>
      </Toolbar>
    </AppBar>
   
   </>
  );
    
}
