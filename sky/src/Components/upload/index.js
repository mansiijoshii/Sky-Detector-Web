import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../Assets/bg.png";
import img from "../Assets/ShareIcon.png";

const Upload = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file)); // Save uploaded image URL
  };

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        onClick={handleImageClick}
        className="mt-40 w-50 flex flex-col items-center space-between"
      >
        {image ? (
          <img
            src={image}
            style={{ height: "60%", width: "50%" }}
            alt="Image"
          />
        ) : (
          <img src={img} style={{ height: "30%", width: "20%" }} alt="Img" />
        )}
        <input type="file" onChange={handleImageChange} ref={inputRef} />
      </div>
      <div className="flex flex-col items-center mt-[50px]">
        <button
          onClick={() => navigate(`/mask?image=${encodeURIComponent(image)}`)}
          className='button type = "button" class=" text-white bg-gradient-to-r from-[#2A4E77] to-[#6587AE] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#2A4E77] dark:focus:ring-[#7EA1CA] shadow-lg shadow-[#6587AE] dark:shadow-lg font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ml-4 pl-2"'
        >
          Get Mask
        </button>
      </div>
    </div>
  );
};

export default Upload;
