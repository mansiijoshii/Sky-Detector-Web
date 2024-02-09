import React, { useEffect, useState } from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Header from "./Components/header";
import Login from "./Components/login";
import Signup from "./Components/Signup";


import { AuthProvider } from "./contexts/authContext";
 

const App=()=> {
  return (
    <>
    <Navbar/>
    <AuthProvider>
      <Header />
      <Routes>
      <Route exact path="/signup" Component={Signup}/>
      <Route exact path="/login" Component={Login}/>
      <Route exact path="/" Component={Home}/>
     </Routes>
     </AuthProvider>
  </>
  );
}

export default App;
