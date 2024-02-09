import React, { useState } from 'react';

const App=()=>{

  const [currvalue, setvalue]=useState();
  const [curritem, setitem]=useState([]);
  
  const itemEvent=(event)=>{
      setvalue(event.target.value);
  }
  
 const Additem=()=>{
    setitem((olditem)=>{
      return[...olditem,currvalue];
       
    });
    setvalue(""); 
  }

  return(
    <>
  <div className='maindiv'>
    <div className='centrediv'>
    <br/>
    <h1>TO DO LIST</h1>
    <br/>
    <input type='text' placeholder='Add item' onChange={itemEvent} value={currvalue} />
    <button onClick={Additem}> + </button>

    <ul>
      {
        curritem.map((itemval)=>{
          return <li>{itemval}</li>
        })
      }
    </ul>

    </div>
 </div>

    </>
  )

}

export default App;
