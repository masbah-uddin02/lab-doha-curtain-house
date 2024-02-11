import React from "react";
import logo from "../../../Images/2 501.svg";
import img1 from "../../../Images/image 1.svg";
import img2 from "../../../Images/image 2.svg";
import img3 from "../../../Images/image 3.svg";
import img4 from "../../../Images/image 4.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [data, setData] = useState([]);
  const [logo, setLogo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/footer/getFooter`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data[0]);
        }
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/topBar/getTopBar`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setLogo(data?.data[0]);
        }
      });
  }, []);
  return (
    <div className="footerBg px-16 py-10 bg-[#D9D9D9]">
      <div className="grid border-b-2 border-[#000000] pb-10 gap-16 grid-cols-1 md:grid-cols-5">
        <div className="">
          <img className="h-20" src={logo?.logo} alt="logo" />

          <p className="text-xs title text-justify mt-3">{data?.description}</p>
        </div>
        <div className="fontStyle">
          <h1 className="font-extrabold text-lg pb-2 border-b-2 border-black mr-32 md:mr-[60px]">
            Informations
          </h1>
          <div className="text-sm flex flex-col gap-2 mt-3">
            <Link to="aboutUs">
              {" "}
              <p>About Us</p>
            </Link>
            <Link to="contactUs">
              {" "}
              <p>Contact us</p>
            </Link>
            <p>Our services</p>
            <Link to="blogs">
              <p>Our Blogs</p>
            </Link>
            <Link to="privacyPolicy">
              {" "}
              <p>Privacy policy</p>
            </Link>
            <Link to="refundReturns">
              <p>Refund & Returns</p>
            </Link>
            <Link to="TermsConditions">
              {" "}
              <p>terms & Conditions</p>
            </Link>
          </div>
        </div>
        <div className="fontStyle">
          <h1 className="font-extrabold text-lg pb-2 border-b-2 border-black mr-32 md:mr-[60px]">
            Informations
          </h1>
          <div className="text-sm flex flex-col gap-2 mt-3">
            <Link to="products/sofa">
              {" "}
              <p>Sofa</p>
            </Link>
            <Link to="products/carpet">
              {" "}
              <p>Carpet</p>
            </Link>
            <Link to="products/curtain">
              {" "}
              <p>Curtain Blinds</p>
            </Link>
            <Link to="products/wallpaper">
              {" "}
              <p>Wallpaper</p>
            </Link>{" "}
            <Link to="products/woodenFloor">
              {" "}
              <p>Wooden Floor</p>
            </Link>
            
          </div>
        </div>
        <div className="fontStyle">
          <h1 className="font-extrabold text-lg pb-2 border-b-2 border-black mr-32 md:mr-[60px]">
            Informations
          </h1>
          <div className="text-sm flex flex-col gap-2 mt-3">{data?.info}</div>
        </div>
        <div className="fontStyle">
          <h1 className="font-extrabold text-lg pb-2 border-b-2 border-black mr-32 md:mr-[60px]">
            Informations
          </h1>
          <div className="text-sm flex flex-col gap-2 mt-3">
            <p>{data?.phone}</p>
            <p>{data?.email}</p>
            <p>{data?.location}</p>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-4 gap-5 mt-10">
                <img className="h-8" src={img1} alt="" />
                <img className="h-8" src={img2} alt="" />
                <img className="h-8" src={img3} alt="" />
                <img className="h-8" src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between   items-center pt-7">
        <p className=" xs:text-xs">
          © 2024 Doha Curtains House. All Rights Reserved. Develop by{" "}
          <span className="font-bold">
            {" "}
            <Link to="/developer-team">Amir Faysal & Team</Link>
          </span>
        </p>
        <div className="flex text-xl xs:mt-5 xs:justify-center gap-3">
          <a href={data?.facebook} rel="noreferrer" target="_blank">
            <Icon icon="logos:facebook"></Icon>
          </a>
          <a href={data?.instagram} rel="noreferrer" target="_blank">
            <Icon icon="skill-icons:instagram"></Icon>
          </a>
          <a href={data?.twitter} rel="noreferrer" target="_blank">
            <Icon icon="logos:twitter"></Icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
