import React from "react";
import "./Navbarstyle.css";
import { Link } from "react-router-dom";


const Navbar=()=>{

    return(
        <nav className="navitems">
        <h1 className="logo"><i class="fa-brands fa-skyatlas"></i>   SkyDetect</h1>

        <ul className="navmenu">
            <li>
            <Link to="/"><i class="fa-solid fa-house"></i>Home</Link>
            </li>
            <li>
            <Link to="/signup">Sign up</Link>
            </li>
        </ul>
        </nav>

    );

}
export default Navbar;