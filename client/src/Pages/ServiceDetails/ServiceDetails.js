import React, { useEffect, useState } from "react";
import img from "../../Assets/serviceDetails/BG (16).png";
import img2 from "../../Assets/serviceDetails/Rectangle 40.png";
import img3 from "../../Assets/serviceDetails/Rectangle 42.png";
import img4 from "../../Assets/serviceDetails/Rectangle 43.png";
import img5 from "../../Assets/serviceDetails/Rectangle 41 (2).png";
import img6 from "../../Assets/serviceDetails/Rectangle 44.png";
import img7 from "../../Assets/serviceDetails/Rectangle 45.png";
import bg from "../../Assets/hero/bg hero section.svg";
import { useParams } from "react-router-dom";


const ServiceDetails = () => {
  const {id}=useParams();
  const [data,setData]=useState([])

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/Service/getServiceById/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, [id]);

  return (
    <div
      className="p-10"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full">
        <img className="relative w-full" src={data?.img1} alt="img"></img>
        <div className="absolute px-8 w-full bottom-5">
          <div className="flex justify-between items-end  ">
            <div className=" font-playfair">
              <p className="text-2xl text-[#FFFFFF] font-bold">
                {data?.title}
              </p>
              <p className=" text-[#DFDFDF] mt-1 font-semibold ">
                Published on Doha Curtain House{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="font-playfair mt-8  gap-8 flex">
        <div className="w-8 flex justify-center items-center h-[250px]">
          <h2 className="tracking-widest uppercase text-[#00000080] text-3xl font-bold transform -rotate-90">
            Description
          </h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
      </div>

      <div className="mt-16 mb-10">
        <h1 class="font-playfair font-bold text-4xl text-[#191919]  text-center pb-5">
          Work Gallery
        </h1>

        {/* 1st section */}

        <div className="flex flex-col md:flex-row gap-6">
          {
            data?.img2&&<div className="relative w-full  md:w-2/3">
            <img className="relative h-full w-full" src={data?.img2} alt=""></img>
            <div className="absolute px-8 w-full bottom-5">
              <p className="text-2xl  font-playfair text-[#FFFFFF] font-bold">
                Sofa Upholstery
              </p>
            </div>
          </div>
          }

          {
            data?.img3&&<div className="relative w-full md:w-1/3">
            <img className="relative h-full w-full" src={data?.img3} alt=""></img>
            <div className="absolute px-8 w-full bottom-5">
              <p className="text-2xl  font-playfair text-[#FFFFFF] font-bold">
                Sofa Upholstery
              </p>
            </div>
          </div>
          }
        </div>

        {/* 2nd section  */}

        <div className="flex mt-5 flex-col md:flex-row gap-6">
         {
          data?.img4 &&<div className="relative w-full md:w-1/3">
          <img className="relative h-full w-full" src={data?.img4} alt=""></img>
          <div className="absolute px-8 w-full bottom-5">
            <p className="text-2xl  font-playfair text-[#FFFFFF] font-bold">
              Sofa Upholstery
            </p>
          </div>
        </div>
         }

          {
            data?.img5&&<div className="relative w-full  md:w-2/3">
            <img className="relative h-full w-full" src={data?.img5} alt=""></img>
            <div className="absolute px-8 w-full bottom-5">
              <p className="text-2xl  font-playfair text-[#FFFFFF] font-bold">
                Sofa Upholstery
              </p>
            </div>
          </div>
          }
        </div>

        {/* 3rd image secton */}

        
      </div>
    </div>
  );
};

export default ServiceDetails;
