import React, { useEffect, useState } from "react";
import bg from "../../../Assets/service/BG.png";
import Cardbg from "../../../Assets/service/Card BG.png";
import cardicon from "../../../Assets/service/card-icon.png";
import { Link } from "react-router-dom";

const Ourservices = () => {
  const [data,setData]=useState([])
  useEffect(() => {
      fetch(`http://localhost:5000/api/v1/Service/getService`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data.length) {
            setData(data?.data);
          }
        });
    }, []);

    console.log(data.description)

  return (
    <div
      style={{ backgroundImage: `url("${bg}")` }}
      className="relative min-h-screen "
    >
      <h1 class="font-playfair font-bold text-4xl text-[#191919]  text-center pt-5">
        Our Services
      </h1>
{/* card div */}



<div className="grid grid-cols-1 md:grid-cols-4 px-5 pb-8 mt-8 gap-5">
  {
    data.map(s =><div className=" ">
    <div
      style={{
        backgroundImage: `url("${Cardbg}")`,
        backgroundRepeat: "no-repeat",
      }}
      className="relative  h-[400px] w-full flex justify-center items-center  font-playfair  backdrop-blur-md "
    >
      <div className="text-center ">
        <div className="flex justify-center items-center  ">
          <img src={s?.icon} alt="Card Icon" />
        </div>

        <div className=" mt-5">
          <h1 className=" text-lg font-bold ">{s.title}</h1>
        </div>

        <div className="text-sm mt-5 mb-7 px-5  text-center ">

        <div >Explore Our Service</div>
        </div>

        <Link to={`/our-services/${s?._id}`} className="">
          <button className=" bg-black text-white px-[24px] py-[12px]  text-[16px] ">View More</button>
        </Link>
      </div>
    </div>
  </div>)
  }
</div>












     <div>
     {/* <div className="lg:pl-10 lg:pr-10 xs:pl-5 xs-pr-5 ">
        <div
          style={{
            backgroundImage: `url("${Cardbg}")`,
            backgroundRepeat: "no-repeat",
          }}
          className="relative w-[412px] h-[446px] flex justify-center items-center p-10 font-playfair  backdrop-blur-md "
        >
          <div className="text-center ">
            <div className="flex justify-center items-center  ">
              <img src={cardicon} alt="Card Icon" />
            </div>

            <div className=" mt-5">
              <h1 className=" text-[24px] font-bold ">Sofa Upholstery & Repairing</h1>
            </div>

            <div className=" mt-5 text-justify">
              <p>
                Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed
                diam non ummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>
            </div>

            <div className=" mt-5">
              <button className=" bg-black text-white px-[24px] py-[12px]  text-[16px] ">View More</button>
            </div>
          </div>
        </div>
      </div> */}
      
     </div>
    </div>
  );
};

export default Ourservices;
