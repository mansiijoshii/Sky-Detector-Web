import React from 'react'
import { useAuth } from '../../contexts/authContext'
import backimg from '../Assets/backimg.png'

const Home = () => {
    const { currentUser } = useAuth()
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
            <div>
                
            </div>
        
        </div>
          
        </div>
    )
}

export default Home