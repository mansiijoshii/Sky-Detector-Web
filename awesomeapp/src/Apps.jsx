import React, { useState } from "react";
/*import './index.css';

function app(){

  let time=new Date().getHours();
let greeting="";
const cssstyle={};


if (time>=7 && time<11)
{greeting="Good Morning";
cssstyle.color='yellow';}
else if(time>=11 && time<20)
{greeting="Good Afternoon";
cssstyle.color='red';}
else 
{  greeting="Good Night"; 
cssstyle.color=' purple';}


return(
 <>
 <div> 
 <h1> Hello Sir <span style={cssstyle}>{greeting}</span>  </h1>
 </div>
  </>
  )
}*/
 const App = ()=>{

  const [newvalue,setvalue]=useState(0);

  
  let inc =()=>{
       setvalue(newvalue+1);
  };
  let dec=()=>{
    if(newvalue>0){
      setvalue(newvalue-1);
    }
    else if(newvalue<0){
       
      setvalue(0);
    }
  };

  

return(
  <>
    <h1>{newvalue}</h1>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>decrement</button>
  </>
)


}

export default App;