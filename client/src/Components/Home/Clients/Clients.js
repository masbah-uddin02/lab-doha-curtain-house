import React from "react";
import bg from "../../../Images/Group 92.svg";
import { useEffect } from "react";
import { useState } from "react";

const Clients = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/happyClient/getHappyClient`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data[0]);
        }
      });
  }, []);
  return (
    <div className="my-20">
      <h1 className="text-center title text-2xl md:text-4xl font-bold mb-5 ">
        Our Happy Clients
      </h1>
      <p className="text-center text-xl fontStyle text-[#7E7E7E]">
        Work Experience
      </p>

      <div className="grid gap-5 mt-12 grid-cols-1 md:grid-cols-3 mx-10 md:mx-40">
       
          <div className="bg-style rounded-br-2xl px-10 py-16">
            <div className="text-center">
              <h1 className="text-3xl fontStyle font-extrabold text-[#4B4B4B]">
                {data?.clients} +
              </h1>
              <p className="fontStyle text-xl font-bold text-[#7E7E7E] mt-2">
               Clients
              </p>
            </div>
          </div>
          <div className="bg-style rounded-br-2xl px-10 py-16">
            <div className="text-center">
              <h1 className="text-3xl fontStyle font-extrabold text-[#4B4B4B]">
                {data?.network} %
              </h1>
              <p className="fontStyle text-xl font-bold text-[#7E7E7E] mt-2">
               Network
              </p>
            </div>
          </div>
          <div className="bg-style rounded-br-2xl px-10 py-16">
            <div className="text-center">
              <h1 className="text-3xl fontStyle font-extrabold text-[#4B4B4B]">
                {data?.projects} +
              </h1>
              <p className="fontStyle text-xl font-bold text-[#7E7E7E] mt-2">
               Projects
              </p>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Clients;
