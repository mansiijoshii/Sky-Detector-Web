import React from 'react'
import backimg from '../Assets/backimg.png'
import { useNavigate } from 'react-router-dom'


const Mask = () =>{

    return(
        <div
        className='w-full h-screen bg-no-repeat bg-cover'
        style={{backgroundImage: `url(${backimg})`}}>
         
        </div>
    )

}

export default Mask;