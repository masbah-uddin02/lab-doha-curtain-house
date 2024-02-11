import React from "react";
import frame from "../../../Images/Frame.svg";
import car from "../../../Images/Group.svg";
import call from "../../../Images/call.svg";
import { useEffect } from "react";
import { useState } from "react";

const Topbar = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/topBar/getTopBar`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data[0]);
        }
      });
  }, []);
  return (
    <div className="hidden lg:block">
      <div className="h-[50px] flex  justify-between fontStyle text-[#FFFFFF] bg-[#191919]">
        <div className=" flex gap-12 px-10 items-center  ">
          <div className="flex gap-2  items-center">
            <img src={frame} alt="" />
            <p className="text-[16px] font-normal">
              {data?.offer}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={car} alt="" />
            <p className="text-[16px] font-normal">
            {data?.deliveryLocation}
            </p>
          </div>
        </div>

        <div className="flex gap-2 px-10 items-center">
          <img src={call} alt="" />
          <p className="text-[16px] font-bold"> {data?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
