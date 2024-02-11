import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";

const Review = () => {
  const [data,setData]=useState([])
  useEffect(() => {
      fetch(`http://localhost:5000/api/v1/review/getReview`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data.length) {
            setData(data?.data);
          }
        });
    }, []);
 
  return (
    <div className="my-20 pl-[40px] pr-[40px]">
      <h1 className="text-center title text-2xl md:text-4xl font-bold mb-16 ">
        Our Customers Review
      </h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {[...data].slice(0,4).reverse()?.map((r) => (
          <div className="bg-[#e8e7e7] rounded-xl p-8">
            <div className="flex mb-5 text-xl text-[#818080] gap-1">
              <BiSolidStar></BiSolidStar>
              <BiSolidStar></BiSolidStar>
              <BiSolidStar></BiSolidStar>
              <BiSolidStar></BiSolidStar>
              <BiSolidStar></BiSolidStar>
            </div>
          
            <p className="text-[#3A3A3A] text-justify text-sm fontStyle mt-2 mb-6">
              {r?.review}
            </p>

            <div className="flex gap-3 items-center">
              <img className="w-10 rounded-full object-cover h-10 border shadow-lg" src={r?.img} alt=""></img>
              <div>
                <p className="font-semibold mb-0">{r?.name}</p>
                <span className="text-xs">{r?.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/all-reviews">
        <div className="text-center my-8">
          <button className="bg-[#191919]  text-[#FFFFFF] px-6 py-1">
            SEE ALL
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Review;
