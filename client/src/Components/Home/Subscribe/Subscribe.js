import React from "react";
import bgImg from "../../../Images/Rectangle 25.png";
import bgImg2 from "../../../Images/Rectangle 27.svg";
import { useState } from "react";
import { useEffect } from "react";

const Subscribe = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/subscribe/getSubscribe`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data[0]);
        }
      });
  }, []);
  return (
    <div className=" mt-5 relative">
      <img className="xs:h-[520px]  h-[490px]  md:h-96 w-full" src={data?.bgImg} alt=""></img>
      <div className="flex md:flex-row flex-col md:justify-between items-center absolute top-10 md:top-5 lg:top-9  gap-5 ">
        <div className="md:pl-[40px] ">
          <h3 className="title md:text-start text-center text-xl md:text-4xl text-[#FFFFFF] font-bold ">
            {data?.title}
          </h3>
          <p className="w-4/5 mx-auto md:mx-0 md:text-start text-center md:w-2/3 mt-3 md:mt-8 font-thin text-sm subs-style md:text-lg text-[#FFF9F9]">
            {data?.description}
          </p>
          <form className="mt-5 md:mt-10 flex justify-center md:justify-start">
              <input className="w-1/2 py-3 px-5 bg-white/10 backdrop-blur-sm text-white" placeholder="Enter your email here...." type="email" name="email"></input>
              <button className="bg-[#191919] font-semibold text-[#FFFFFF] ml-2 px-6 py-3">SUBSCRIBE</button>
          </form>
        </div>

        <div className="md:pr-[40px]">
          <img className=" w-full h-60 md:h-80 " src={data?.shortImg} alt="img"></img>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
