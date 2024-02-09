import React, { useEffect, useState } from "react";
import {Route,Routes} from "react-router-dom";
 import Home from "./Home";
import contact from "./Contact";
import Navbar from "./Navbar";
 

const ComA=()=>{

     return(
      <>
      <Navbar/>
        <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/contact" Component={contact}/>
        
        </Routes>

      </>
     );
}

export default ComA;