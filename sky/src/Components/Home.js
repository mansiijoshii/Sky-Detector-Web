import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { analytics } from '../firebase/firebase';
 
const Home = () => {
 
    useEffect(()=>{
        onAuthStateChanged( analytics, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
   <h1>home page</h1>
  );
}
 
export default Home;

/*import React from "react";

const Home=()=>{
   return( <h1>home page</h1>);
}

export default Home;*/
