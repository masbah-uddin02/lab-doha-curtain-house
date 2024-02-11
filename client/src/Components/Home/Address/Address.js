import React from "react";
import img1 from "../../../Images/Rectangle 33.png";

const Address = () => {
  return (
    <div className=" w-full px-10 my-28">
      <h1 className="text-center title text-2xl md:text-4xl font-bold mb-10 ">
        Find Our Adress
      </h1>
      <div className="relative">
        <img className="w-full h-80" src={img1} alt=""></img>
        <h1 className="fontStyle ml-32 md:ml-[550px] mb-20 text-[#FFFFFF] font-extrabold text-xl md:text-2xl absolute top-1/3">Pinch to Zoom</h1>
      </div>
    </div>
  );
};

export default Address;
