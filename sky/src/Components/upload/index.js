import React from 'react'
import backimg from '../Assets/backimg.png'
import img from '../Assets/photo.png'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Upload = () =>{

    const navigate= useNavigate();

    const inputRef=useRef(null);
    const[image,setImage]=useState("");
    const handleImageClick=()=>{
          inputRef.current.click();
           
    }
    
    const handleImageChange=(event)=>{
       const file=event.target.files[0];
       console.log(file);
       setImage(event.target.files[0]);
    } 

    return(
        <div
        className='w-full h-screen bg-no-repeat bg-cover'
        style={{backgroundImage: `url(${backimg})`}}>
           

            <div onClick={handleImageClick} className=' ml-40 mt-40 w-50 flex flex-col place-content-center space-between'> 
            
            {image?(  <img src={URL.createObjectURL(image)} style={{height:"35%", width:"20%"}} alt='' />):( <img src={img} style={{height:"35%", width:"20%"}} alt='' />)}
            <input type='file' onChange={handleImageChange} ref={inputRef}/>
            </div>

            <div>
            <button onClick={()=>{navigate("/mask");}} className='button type="button" class="text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"'>Get Mask</button>
             </div>
        </div>

    )

}

export default Upload;