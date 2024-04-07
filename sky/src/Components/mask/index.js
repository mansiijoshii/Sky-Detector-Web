import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import backimg from "../Assets/backimg.png";

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
      style={{ backgroundImage: `url(${backimg})` }}
    >
      <div className="flex flex-row justify-center mt-[100px] w-full ">
        <div className="flex flex-col items-center mb-[40px] w-full ">
          <h2 className="mb-[50px]">Original Image</h2>
          <img src={originalImage} alt="Original" />
        </div>
        <div className="flex flex-col items-center mb-[40px] mr-[40px] w-full ">
          <h2 className="mb-[50px]">Masked Image</h2>
          <img src={maskedImage} alt="Masked" />
        </div>
        <div className="flex flex-col items-center mb-[40px] mr-[150px] w-full ">
          <h2 className="mb-[50px]">Graph Image</h2>
          <img src={graphImage} alt="Graph" />
        </div>
      </div>
    </div>
  );
};

export default Mask;
