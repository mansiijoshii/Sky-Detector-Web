import React from 'react'
import bg from "../Assets/bg.png";

const About = () =>{

    return(
        <div
        className='w-full h-100% bg-no-repeat bg-cover'
        style={{backgroundImage: `url(${bg})`}}>
        <div className=" w-50% flex flex-col justify-left mt-40 lg:px-96 md:px-20">
         
                <div className="font-poppins m-10">
                    <p className="text-[#1B3757] text-6xl font-bold italic ml-20">
                        About US
                    </p>
                </div>
                <div className='m-5 text-[#1B3757]'>
                    <h1>Our Mission</h1>
                    <p className="font-rose text-[1.1rem] ">At Sky Detector, we are committed to promoting renewable energy adoption by empowering individuals and businesses to make informed decisions about solar panel installations. Our mission is to leverage cutting-edge technology to simplify the process of assessing solar suitability and encourage sustainable energy practices.</p>
                </div>
                <div className='m-5 text-[#1B3757]'>
                    <h1>How It Works</h1>
                    <p className="font-rose text-[1.1rem] ">Using state-of-the-art computer vision algorithms, Sky Detector accurately identifies sky pixels within your uploaded photo. By analyzing the portion of visible sky and considering the current sun position based on your location and time, our app calculates the ideal angle of elevation for solar panels.</p>
                </div>
                <div className='m-5 text-[#1B3757]'>
                    <h1>Key Features</h1>
                    <ol>
                        <li><h2 className='font-bold'>Sky Pixel Detection: </h2><p className="font-rose text-[1.1rem]">Our app accurately identifies sky pixels in user-uploaded photos, allowing for precise analysis of available sky view.</p></li>
                        <li><h2 className='font-bold'>Sun Position Calculation: </h2><p className="font-rose text-[1.1rem] ">Sky Detector calculates the position of the sun based on the user's location and time, ensuring accurate solar panel angle recommendations.</p></li>
                        <li><h2 className='font-bold'>Optimal Solar Panel Angles:</h2><p className="font-rose text-[1.1rem] ">We provide users with recommendations for the best tilt angle of solar panels to maximize energy capture efficiency.</p></li>
                    </ol>
                    <p className=" m-5 font-rose text-[1.1rem] "></p>
                </div>
                
        </div>
         
        </div>
    )

}

export default About;