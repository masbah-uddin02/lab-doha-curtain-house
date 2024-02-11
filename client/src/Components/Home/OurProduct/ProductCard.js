import React from "react";
import star from "../../../Images/grade.svg";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className="border-[2px] border-black p-2 max-w-xs">
      <img className="h-[253px] w-full object-cover" src={data?.img1} alt="img" />
      <p className="text-2xl font-playfair font-bold mt-2">
        <p>title</p>

        {/* <p>{i.title}</p> */}
      </p>
      <div className="flex gap-[1px] my-[10px]">
        <img src={star} alt=""></img>
        <img src={star} alt=""></img>
        <img src={star} alt=""></img>
        <img src={star} alt=""></img>
        <img src={star} alt=""></img>
        <span className="font-bold ml-2">5.0</span>
      </div>
      <button className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
        DETAILS
      </button>
    </div>
  );
};

export default ProductCard;
