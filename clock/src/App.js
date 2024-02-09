 import React, { useState } from "react";


 
const App=()=> {
 
let newtime = new Date().toLocaleTimeString(); 
const [ctime, updtime ]=useState(newtime);

const updatetime= ()=>{
  let newtime = new Date().toLocaleTimeString(); 
  updtime(newtime);
}
//FOR DIGITAL CLOCK-set interval,no need of button
//setInterval(updatetime,1000);

  return (
    <>
     <h1>TIME</h1> 
     <h1>{ctime}</h1>
     <button onClick={updatetime}> GET TIME </button>
     </>
  );
}

export default App;
