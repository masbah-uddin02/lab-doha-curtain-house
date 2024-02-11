import React, { useState } from "react";
import logo from "../../../Images/2 502.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const [data,setData]=useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/topBar/getTopBar`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data[0]);
        }
      });
  }, []);

  return (
    <div className="sticky left-0 right-0 top-0 z-10">
      <nav className=" pl-[40px] pr-[40px]  bg-white/50 backdrop-blur-md ">
        <div className="lg:flex lg:items-center  lg:justify-between  gap-40 w-full  lg:space-x-4 xs:hidden ">
          <Link to="/" className=" ">
            <img src={data?.logo} alt="" />
            <p className="text-xs">Doha Curtain House</p>
          </Link>
          <div className=" ">
            {" "}
            <ul className="lg:flex text-[16px] lg:space-x-4 uppercase  ">
              <li>
                <Link
                  to=""
                  className="text-[#000] text-tra hover:text-black-500 hover:border-b-2 border-black font-inter text-16 font-semibold uppercase"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="our-services"
                  className="text-[#000] text-tra hover:text-black-500 hover:border-b-2 border-black font-inter text-16 font-semibold uppercase"
                >
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  to="our-products"
                  className="text-[#000] text-tra hover:text-black-500 hover:border-b-2 border-black font-inter text-16 font-semibold uppercase"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="blogs"
                  className="text-[#000]    text-tra hover:text-gray-500  font-inter text-16 font-semibold uppercase"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="aboutUs"
                  className="text-[#000]    text-tra hover:text-gray-500 font-inter text-16 font-semibold uppercase"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contactUs"
                  className="text-[#000]    text-tra hover:text-gray-500  font-inter text-16 font-semibold uppercase"
                >
                  Contact
                </Link>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </div>

          <Link to="appointment" className="inline-flex px-4 py-2 justify-center items-center gap-10 bg-black backdrop-blur-md border-none rounded-none uppercase">
            <button className="text-white uppercase">Appointment</button>
          </Link>
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div className="lg:hidden px-5 py-2 flex items-center justify-between bg-white/50 backdrop-blur-md ">
        <button onClick={toggleSidebar} className=" text-3xl font-bold">
          &#9776;
        </button>
        <Link to="/" className="">
          <div className=" ">
            <img className="w-8" src={logo} alt="logo" />
          </div>
        </Link>
      </div>
      {showSidebar && (
        <div className="lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow z-50 p-5">
          <ul className="space-y-2 ">
            <li>
              <Link href="#" className="text-lg font-bold">
                <div className=" ">
                  <img className="w-10 mb-1" src={logo} alt="logo" />
                  <p className="text-xs">Doha Curtain House</p>
                </div>
              </Link>
            </li>
            <li>
              <Link  to="" className=" hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="our-services" className=" hover:text-gray-500">
                Our Services
              </Link>
            </li>

            <li>
              <Link  to="our-products" className=" hover:text-gray-500">
                Our Products
              </Link>
            </li>

            <li>
              <Link  to="blogs" className=" hover:text-gray-500">
                Blogs
              </Link>
            </li>

            <li>
              <Link    to="aboutUs" className=" hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link  to="contactUs" className=" hover:text-gray-500">
                Contact
              </Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </div>
      )}
      {showSidebar && (
        <div
          onClick={toggleSidebar}
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
