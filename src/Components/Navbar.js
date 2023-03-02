import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from "../assets/logo.jpg"

const Navbar  = () =>{
    return(
           
      <AppBar position="static" sx={{backgroundImage:"linear-gradient(90deg, rgba(56,52,52,0.989233193277311) 0%, rgba(25,25,25,0.9752275910364145) 100%);"}}>
        <Toolbar>
        <navbar>
        <img src={logo} alt="" />
      </navbar>
        </Toolbar>
        </AppBar>
       
    )
}

export default Navbar;