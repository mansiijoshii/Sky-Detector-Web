import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
       path: "/about",
       element: <About/>,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;



/*import React, { useEffect, useState } from "react";
//import { BrowserRouter } from 'react-router-dom';
import {Router,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Header from "./Components/header";
import Login from "./Components/login";
import Signup from "./Components/Signup";


import { AuthProvider } from "./contexts/authContext";


const App=()=> {
    const[isAuth,setIsAuth]=useState(false);

  return (
    <>
    <Router> 
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
    </nav>
     
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/signup" Component={<Signup setIsAuth={setIsAuth}/>}/>
      </Routes>
      </Router> 
    
  </>
  );
}

export default App;
*/
