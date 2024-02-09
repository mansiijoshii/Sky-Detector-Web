 import React from "react";
 import {add,sub,mul,div} from './Calc';

 function Apps(){
    return(
        <>       
        <ul>
           <li>{add(2,3)}</li>
           <li>{sub(2,3)}</li>
           <li>{mul(2,3)}</li>
           <li>{div(2,3)}</li>
        </ul>
  
    </>
    );
 }

 export default Apps;