import React from "react";
import star from "../../../Images/grade.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LatestSofa = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/products/getProducts`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.data.length) {
              setData(data?.data);
            }
          });
      }, []);
      const items = data?.filter(d=>d?.category==="sofa");
  return (
    <div className=" pb-20">
      <div className="flex justify-between mb-5 items-center">
        <h1 className=" font-playfair text-2xl md:text-3xl font-bold ">
        Latest Sofa
        </h1>
        <Link to="/products/sofa" className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
          VIEW MORE
        </Link>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...items]?.reverse()?.slice(0,4)?.map((i) => (
          <div className="border-[2px] border-black p-2">
            <img className="h-[253px] w-full object-cover" src={i?.img1} alt="" />
            <p className="text-2xl font-playfair font-bold mt-2">
              {i?.title.length > 19 ? (
                <p>{i?.title.slice(0, 19)}...</p>
              ) : (
                <p>{i?.title}</p>
              )}
            </p>
            <div className="flex gap-[1px] my-[10px]">
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <span className="font-bold ml-2">5.0</span>
            </div>
            <Link to={`/our-product/${i?._id}`} className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
                  DETAILS
                </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSofa;
