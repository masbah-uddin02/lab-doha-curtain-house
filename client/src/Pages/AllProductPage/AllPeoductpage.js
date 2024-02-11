import React from "react";
import img1 from "../../Assets/products/sofa/Rectangle 15 (4).png";
import img2 from "../../Assets/products/sofa/Rectangle 15 (5).png";
import img3 from "../../Assets/products/sofa/Rectangle 15 (6).png";
import img4 from "../../Assets/products/sofa/Rectangle 15 (7).png";
import star from "../../Images/grade.svg";
import bg from "../../Assets/hero/bg hero section.svg";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const AllPeoductpage = () => {
  const [data,setData]=useState([]);
  const {id}=useParams();
  useEffect(() => {
      fetch(`http://localhost:5000/api/v1/products/getProducts`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data.length) {
            setData(data?.data);
          }
        });
    }, []);

const product = data?.filter(d=>d?.category===id);

  return (
    <div
      className="pt-10 pb-16 px-10 bg-[#f3f0f0]"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center font-playfair text-2xl md:text-4xl font-bold  pb-8 ">
        Choosing the Perfect {id}
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {product.map((i) => (
          <div className="border-[2px] border-black p-2">
            <img className="h-[253px] w-full object-cover" src={i?.img1} alt="" />
            <p className="text-2xl font-playfair font-bold mt-2">
              {i.title.length > 19 ? (
                <p>{i.title.slice(0, 19)}...</p>
              ) : (
                <p>{i.title}</p>
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
            <Link to={`/our-product/${i?._id}`}>
              <button className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
                DETAILS
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPeoductpage;
