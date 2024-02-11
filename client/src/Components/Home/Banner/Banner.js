import React, { useEffect, useState } from "react";
import div2 from "../../../Images/div 2.png";
import bg from "../../../Assets/hero/bg hero section.svg";
import { Link } from "react-router-dom";
const Banner = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/hero/getHero`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data[0]);
        }
      });
  }, [data]);
  return (
    <div
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
      }}
      className="px-10 pt-5 md:pt-0 pb-20 gap-10 md:gap-80 flex flex-col md:flex-row  items-center h-full w-full"
    >
      <div className=" title pl-0 md:pl-28 items-center text-[#000000]">
        <h1 className="text-xl md:text-3xl font-semibold">{data?.title1}</h1>
        <h1 className="text-3xl md:text-4xl  font-extrabold my-3 tracking-widest">
        {data?.title2}
        </h1>
        <h1 className="text-xl md:text-2xl ">{data?.content1}</h1>
        <h1 className="text-sm md:text-xl mt-3 uppercase  font-semibold ">
          {" "}
          {data?.content2}
        </h1>

        <Link to="appointment">
          <button className="bg-[#191919] text-sm text-[#FFFFFF] px-3 py-[10px] mt-7">
            GET A Appointment
          </button>
        </Link>
      </div>

      <div className="mr-[40px]">
        <img className=" " src={data?.img} alt="Loading Image"></img>
    
      </div>
    </div>
  );
};

export default Banner;
