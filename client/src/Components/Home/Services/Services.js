import React, { useEffect, useState } from "react";
import "../../Home/Home.css";
import call from "../../../Images/call (1).svg";
import service1 from "../../../Images/Rectangle 8.svg";
import service2 from "../../../Images/Rectangle 9.svg";
import service3 from "../../../Images/Rectangle 10.svg";
import service4 from "../../../Images/Rectangle 8 (1).svg";
import service5 from "../../../Images/Rectangle 9 (1).svg";
import service6 from "../../../Images/Rectangle 10 (1).svg";
import bg from "../../../Assets/BackgroundImage/bg_1.png";
import { Link } from "react-router-dom";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/Service/getService`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data);
        }
      });
  }, []);

  return (
    <div
      className="px-10 py-20"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center font-playfair text-2xl md:text-4xl font-bold pb-16">
        Explore Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12  ">
        {data.map((service) => (
          <div key={service._id}>
            <Link
              to={`/our-services/${service?._id}`}
              style={{ backgroundImage: `url("${service?.img1}")` }}
              className="relative h-[230px] block"
            >
              <img className="h-full" src={service?.img1} alt=""></img>
              <div className="absolute w-full mx-auto top-12 rounded ">
                <h3 className="text-sm md:text-lg backdrop-blur-sm mx-5 py-[10px] rounded text-[#FFFFFF] title font-semibold text-center bg-black/40 ...">
                  {service?.title}
                </h3>
              </div>
            </Link>
            <a
              href="tel:+97433092432"
              className="bg-[#191919] py-[18px] mt-2 flex items-center gap-3 justify-center"
            >
              <img className="h-8" src={call} alt=""></img>
              <h3 className="text-white call-style text-xl">CALL Now</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
