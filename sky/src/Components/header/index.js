import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
//import { doSignOut } from '../../firebase/auth'
import { signOut, getAuth } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const auth = getAuth();
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log("error"));
  };
  return (
    <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-#2ABFC8 ">
      {userLoggedIn ? (
        <>
          <div>
            <i class="fa-brands fa-skyatlas"></i>
          </div>
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>
          <button
            onClick={handlesignout}
            className="text-white bg-gradient-to-r from-[#2A4E77] to-[#7EA1CA] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#2A4E77] dark:focus:ring-[#2A4E77] shadow-lg shadow-[#7EA1CA] dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="text-sm text-blue-600 underline" to={"/login"}>
            Login
          </Link>
          <Link className="text-sm text-blue-600 underline" to={"/register"}>
            Register New Account
          </Link>
        </>
      )}
    </nav>
  );
};

export default Header;
