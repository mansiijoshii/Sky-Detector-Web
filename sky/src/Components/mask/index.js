import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bg from "../Assets/bg.png";

const Mask = () => {
  const location = useLocation();
  const [originalImage, setOriginalImage] = useState("");
  const [maskedImage, setMaskedImage] = useState("");
  const [graphImage, setGraphImage] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const uploadedImage = searchParams.get("image");
    if (uploadedImage) {
      setOriginalImage(uploadedImage);
      fetchMaskedImage();
      fetchGraphImage();
    }
  }, [location.search]);

  const fetchMaskedImage = () => {
    // Fetch masked image and set the state
  };

  const fetchGraphImage = () => {
    // Fetch graph image and set the state
  };

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-row justify-center mt-[100px] w-full ">
        <div className="flex flex-col text-xl font-[#2A4E77] items-center mb-[40px] w-full ">
          <h2 className="mb-[50px] text-[#1B3757] italic font-lg">
            Original Image
          </h2>
          <img src={originalImage} alt="Original" />
        </div>
        <div className="flex flex-col text-xl font-[#2A4E77] items-center mb-[40px]  w-full ">
          <h2 className="mb-[50px] text-[#1B3757] italic font-lg">
            Masked Image
          </h2>
          <img src={maskedImage} alt="Masked" />
        </div>
        <div className="flex flex-col text-xl font-[#2A4E77] items-center mb-[40px] w-full ">
          <h2 className="mb-[50px] text-[#1B3757] italic font-lg">
            Graph Image
          </h2>
          <img src={graphImage} alt="Graph" />
        </div>
      </div>
    </div>
  );
};

export default Mask;
