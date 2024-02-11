import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import circle from "../../Images/Ellipse 13.svg";
import bg from "../../Assets/about/hero_bg (2).png";
const ReviewPage = () => {
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
    <div className="pb-20 pt-10 pl-[40px] pr-[40px] bg-[#f6f5f5]"  style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <h1 className="text-center title text-2xl md:text-4xl font-bold mb-16 ">
        Our Customers Review
      </h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {[...data]?.reverse()?.map((r) => (
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

      {/* <div className="flex flex-col md:flex-row mt-10 gap-10 ">
        <div className="md:w-2/3 border-2 border-gray-500 rounded-tl-3xl rounded-br-3xl p-8">
          <div className="flex mb-5 md:mt-8 text-xl text-[#818080] gap-1">
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
          </div>
          <h1 className="text-2xl title font-bold text-[#575353]">
            Title of this Review
          </h1>
          <p className="text-[#3A3A3A] text-justify text-sm fontStyle mt-2 mb-6">
          Really perfect, the site is really nice and very intuitive. You can
            choose the colours, insert a name and a number and your logos! Very
            easy to make and the order fulfilment without any prostrated
            problems.
          </p>

          <div className="flex gap-3">
            <img src={circle} alt=""></img>
            <div>
              <p className="font-semibold mb-0">Masbah Uddin</p>
              <span className="text-xs">Doha, Qatar</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 border-2 border-gray-500 rounded-tl-3xl rounded-br-3xl p-8">
          <div className="flex mb-5 text-xl text-[#818080] gap-1">
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
            <BiSolidStar></BiSolidStar>
          </div>
          <h1 className="text-2xl title font-bold text-[#575353]">
            Title of this Review
          </h1>
          <p className="text-[#3A3A3A] text-justify text-sm fontStyle mt-2 mb-6">
            Really perfect, the site is really nice and very intuitive. You can
            choose the colours, insert a name and a number and your logos! Very
            easy to make and the order fulfilment without any prostrated
            problems.
          </p>

          <div className="flex gap-3">
            <img src={circle} alt=""></img>
            <div>
              <p className="font-semibold mb-0">Masbah Uddin</p>
              <span className="text-xs">Doha, Qatar</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ReviewPage;
