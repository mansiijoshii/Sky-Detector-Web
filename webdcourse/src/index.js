import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
import reportWebVitals from './reportWebVitals';
 import Card from "./Card";
 import Data from  "./Wdata"
  

 function wcard(val){
  return(
     <Card
      title={val.title}
      link={val.link}
      imgsrc={val.imgsrc}
     />
  )
 }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
     {Data.map(wcard)}
     </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
