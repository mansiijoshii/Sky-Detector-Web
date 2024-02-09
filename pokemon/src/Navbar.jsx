import React from "react";
import { Link } from "react-router-dom";
 
const Navbar=()=>{

    return(
         <>
            <Link to="/">Home</Link>
            <Link to="/contact">contact us</Link>
         </>
    );

}
export default Navbar;