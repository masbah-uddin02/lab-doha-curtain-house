import React from "react";
import quality1 from "../../../Images/Group (1).svg";

const BestQuality = () => {
  const qualityItems = [
    {
      img: quality1,
    },
    {
      img: quality1,
    },
    {
      img: quality1,
    },
  ];
  return (
    <div className="grid grid-cols-1 pl-[40px] pr-[40px] md:grid-cols-3 gap-5 my-20">
      {qualityItems.map((q) => (
        <div className="bg-style rounded-br-2xl p-10">
          <div className="flex gap-8">
            <img className="h-20 w-20" src={q.img} alt=""></img>
            <div className="title text-xl font-bold text-[#4B4B4B] mt-2">
              <h2>Best</h2>
              <h2>Quality Assure</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestQuality;
