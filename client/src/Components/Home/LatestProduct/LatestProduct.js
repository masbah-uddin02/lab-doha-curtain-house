import React, { useEffect, useState } from "react";
import product1 from "../../../Images/Rectangle 15.svg";
import product2 from "../../../Images/Rectangle 16.svg";
import product3 from "../../../Images/Rectangle 17.svg";
import product4 from "../../../Images/Rectangle 18.svg";
import star from "../../../Images/grade.svg";
import GreatDeals from "../GreatDeals/GreatDeals";
import bg from "../../../Assets/BackgroundImage/BG (15).png";
import { Link } from "react-router-dom";

const LatestProduct = () => {
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
  return (
    <div
      className="pl-[40px] pr-[40px]  mb-20 border py-5"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pb-16">
        <h1 className="text-center title text-2xl md:text-4xl font-bold mb-16 ">
          Latest Products
        </h1>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {/* change card design, (include title, details button) */}
            {[...data]?.reverse()?.slice(0,4)?.map((p) => (    
                <div className="border-[2px] border-black p-2">
                <img className="h-[253px] w-full object-cover" src={p.img1} alt="" />
                <p className="text-2xl font-playfair font-bold mt-2">
                  {p?.title}
                </p>
                <div className="flex gap-[1px] my-[10px]">
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <span className="font-bold ml-2">5.0</span>
                </div>
                <Link to={`/our-product/${p?._id}`} className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
                  DETAILS
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GreatDeals></GreatDeals>
    </div>
  );
};

export default LatestProduct;
