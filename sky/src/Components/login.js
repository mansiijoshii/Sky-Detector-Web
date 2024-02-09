import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { analytics } from '../firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(analytics, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                        <p> FocusApp </p>                       
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login;




/*import React from "react";
import "./login.css";
 

const Loginform=()=>{
    return(
<>
<div className="outer" >
<div className="box">
<form action="">
    <h1>Login</h1>
    <div className="input-box">
        <input type="" placeholder="Email" required/>
    </div>
    <div className="input-box">
        <input type="password" placeholder="Password" required/>
    </div>
    <div className="remember">
        <label><input type="checkbox" /> Remember me</label>
        <a href="#">Forgot Password</a>
    </div>
    <button type="submit">Login</button>
    <div className="registerlink">
        <p>Don't have an account? <a href="#">Register</a></p>
    </div>
</form>

</div>
   </div> 
</>
    );
};
export default Loginform;*/