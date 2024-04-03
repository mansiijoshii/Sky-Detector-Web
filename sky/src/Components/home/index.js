import React from 'react' 
import { useAuth } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import backimg from '../Assets/backimg.png'

const Home = () => {
    //const { currentUser } = useAuth()
    const navigate= useNavigate();
    return (
        //<div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>

        <div
        className='w-full h-screen bg-no-repeat bg-cover'
        style={{backgroundImage: `url(${backimg})`}}>
        <div className='w-full h-full flex flex-col justify-center space-y-10'> 
            <div className='ml-5'>
                <h1> SKY</h1>
                <h1>DETECTOR</h1>
            </div>
            <div className='ml-10'>
                <p className='tracking-wide'>FROM DUSK TILL DAWN</p>
                <p className='tracking-wide' >OUR SKY DETECTOR GUIDES YOUR GAZE</p>
                
            </div>
            <div className='ml-12'>
                <button onClick={()=>{navigate("/upload");}} className='button type="button" class="text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"'>Get Started </button>
            </div>

            
        </div>
          
        </div>
    )
}

export default Home