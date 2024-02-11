import React from "react";
import bg from "../../../Images/BG (5).png"

const GreatDeals = () => {
  return (
    <div>
      <div className="w-full relative ">
        <img className=" h-44 md:h-80   " src={bg} alt=""></img>
        <div className="absolute  w-1/2 right-1/4  top-1/4  mx-5">
          <div className="backdrop-blur-sm  text-center bg-white/5 border rounded border-gray-600 md:p-5 p-2">
            <h1 className=" text-[#D1D1D1] md:text-lg text-xs fontStyle font-bold">25% off with Furniture</h1>
            <h1 className="title mt-2 mb-5 text-[#FFFFFF] text-2xl md:text-3xl font-extrabold">
            Great Deals
            </h1>
            <button className="bg-[#191919] text-[#FFFFFF] px-6 py-1">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatDeals;
