import React from "react";
import product1 from "../../../Assets/products/BG (6).png";
import product2 from "../../../Assets/products/BG (7).png";
import product3 from "../../../Assets/products/BG (8).png";
import product4 from "../../../Assets/products/BG (9).png";
import product5 from "../../../Assets/products/BG (10).png";
import bg from "../../../Assets/products/hero_bg.png";
import LatesCurtain from "./LatesCurtain";
import LatesCarpet from "./LatesCarpet";
import LatestWallpaper from "./LatestWallpaper";
import LatestWooden from "./LatestWooden";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import LatestSofa from "./LatestSofa";

const OurProduct = () => {
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
      className="px-10 bg-[#f3f2f2]"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 class="font-playfair font-bold text-4xl text-[#191919]  text-center pt-5">
        Our products
      </h1>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mt-8 mb-8">
            <div className="relative w-full">
              <img className="relative w-full" src={product1} alt=""></img>
              <div className="absolute px-8 w-full bottom-5">
                <div className="flex justify-between items-end  ">
                  <div className=" font-playfair">
                    <p className=" text-[#DFDFDF] font-semibold ">Indor</p>
                    <p className="text-2xl text-[#FFFFFF] font-bold">
                      Sofa
                    </p>
                  </div>
                  <div className=" ">
                    <Link to="/products/sofa">
                      <button className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
                        VIEW ALL
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <img className="relative w-full" src={product2} alt=""></img>
              <div className="absolute px-8 w-full bottom-5">
                <div className="flex justify-between items-end  ">
                  <div className=" font-playfair">
                    <p className=" text-[#DFDFDF] font-semibold ">Indor</p>
                    <p className="text-2xl text-[#FFFFFF] font-bold">
                    Curtain
                    </p>
                  </div>
                  <div className=" ">
                  <Link to="/products/curtain">
                      <button className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
                        VIEW ALL
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <img className="relative w-full" src={product3} alt=""></img>
              <div className="absolute px-8 w-full bottom-5">
                <div className="flex justify-between items-end  ">
                  <div className=" font-playfair">
                    <p className=" text-[#DFDFDF] font-semibold ">Indor</p>
                    <p className="text-2xl text-[#FFFFFF] font-bold">
                      Carpet
                    </p>
                  </div>
                  <div className=" ">
                  <Link to="/products/carpet">
                      <button className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
                        VIEW ALL
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
      
        </div>

        <div className="grid grid-cols-1 mb-20 gap-8 md:grid-cols-2">
        
            <div className="relative  w-full">
              <img className="relative w-full" src={product4} alt=""></img>
              <div className="absolute px-8 w-full bottom-5">
                <div className="flex justify-between items-end  ">
                  <div className=" font-playfair">
                    <p className=" text-[#DFDFDF] font-semibold ">Indor</p>
                    <p className="text-2xl text-[#FFFFFF] font-bold">
                    Wallpaper
                    </p>
                  </div>
                  <Link to="/products/wallpaper">
                    <button className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
                      VIEW ALL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative  w-full">
              <img className="relative w-full" src={product5} alt=""></img>
              <div className="absolute px-8 w-full bottom-5">
                <div className="flex justify-between items-end  ">
                  <div className=" font-playfair">
                    <p className=" text-[#DFDFDF] font-semibold ">Indor</p>
                    <p className="text-2xl text-[#FFFFFF] font-bold">
                    Wooden Floor
                    </p>
                  </div>
                  <Link to="/products/woodenFloor">
                    <button className="bg-[#191919] text-[#FFFFFF] border px-5 py-1">
                      VIEW ALL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
       
        </div>
      </div>

     <LatestSofa></LatestSofa>
      <LatesCurtain></LatesCurtain>
      <LatesCarpet></LatesCarpet>
      <LatestWallpaper></LatestWallpaper>
      <LatestWooden></LatestWooden>
    </div>
  );
};

export default OurProduct;
