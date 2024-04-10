import React from "react";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import bg from "../Assets/bg.png";

const Home = () => {
  //const { currentUser } = useAuth()
  const navigate = useNavigate();
  return (
    //<div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>

    <div
      className="w-full h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-1000 flex flex-col justify-left items-center mt-60 space-y-10">
        <div className="font-poppins">
          <p className="text-[#1B3757] text-6xl font-bold italic ml-20">
            SKY DETECTOR
          </p>
          {/* <h1 className="text-[#1B3757]">DETECTOR</h1> */}
        </div>
        <div className="mr-[30px] text-[#1B3757]">
          <p className="font-rose text-[1.1rem] ">
            Where innovation meets the horizon:
          </p>
          <p className="font-rose text-[1.1rem] ">Sky Detector Solar Panels</p>
        </div>


        <div className="ml-4">
          <button
            onClick={() => {
              navigate("/upload");
            }}
            className='button type = "button" class=" text-white bg-gradient-to-r from-[#2A4E77] to-[#7EA1CA] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#2A4E77] dark:focus:ring-[#7EA1CA] shadow-lg shadow-[#7EA1CA] dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "'
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
