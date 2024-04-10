import React, { useEffect } from "react";
import bg from "../Assets/bg.png";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../scrollUp";

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div
      className="w-full h-100% bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" w-50% flex flex-col justify-center items-center mt-20 lg:px-96 md:px-20">
        {/* Your component JSX */}
        <div className="font-poppins m-5">
          <p className="text-[#1B3757] text-6xl font-bold mb-20">About US</p>
        </div>
        <div className="m-5 text-[#1B3757] mb-[150px]">
          <p className="fonr-bold italic text-5xl mb-10 ml-40">Our Mission</p>
          <div data-aos="flip-up" className="card ml-5">
            <p className="text-[50rem] ">
              At Sky Detector, we are committed to promoting renewable energy
              adoption by empowering individuals and businesses to make informed
              decisions about solar panel installations. Our mission is to
              leverage cutting-edge technology to simplify the process of
              assessing solar suitability and encourage sustainable energy
              practices.
            </p>
          </div>
        </div>

        <div className="m-5 text-[#1B3757] mb-[150px]">
          <p className="fonr-bold italic text-5xl mb-10 ml-40">How It Works</p>
          <div data-aos="flip-down" className="card ml-5">
            <p className="text-[50rem] ">
              Using state-of-the-art computer vision algorithms, Sky Detector
              accurately identifies sky pixels within your uploaded photo. By
              analyzing the portion of visible sky and considering the current
              sun position based on your location and time, our app calculates
              the ideal angle of elevation for solar panels.
            </p>
          </div>
        </div>

        <div className="m-5 text-[#1B3757] mb-[150px]">
          <p className="fonr-bold italic text-5xl mb-10 ml-40">Key Features</p>
          <div data-aos="flip-up" className="card ml-5">
            <ol>
              <li>
                <h2 className="font-bold">Sky Pixel Detection: </h2>
                <p className="font-rose text-[50rem]">
                  Our app accurately identifies sky pixels in user-uploaded
                  photos, allowing for precise analysis of available sky view.
                </p>
              </li>
              <li>
                <h2 className="font-bold">Sun Position Calculation: </h2>
                <p className="font-rose text-[50rem] ">
                  Sky Detector calculates the position of the sun based on the
                  user's location and time, ensuring accurate solar panel angle
                  recommendations.
                </p>
              </li>
              <li>
                <h2 className="font-bold">Optimal Solar Panel Angles:</h2>
                <p className="font-rose text-[50rem] ">
                  We provide users with recommendations for the best tilt angle
                  of solar panels to maximize energy capture efficiency.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default About;
