import React, { useRef } from "react";
import img1 from "../../Assets/contactus/Frame 43.png";
import { CgPhone } from "react-icons/cg";
import { BiLocationPlus } from "react-icons/bi";
import { Icon } from "@iconify/react";
import bg from "../../Assets/hero/bg hero section.svg";
import { IoSendOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GrTextAlignFull } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [data,setData]=useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/contact/getContact`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data[0]);
        }
      });
  }, []);


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5g17blf",
        "template_0iewh5s",
        form.current,
        "yna2rCo3j4pXbMkWt"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Your application submitted",
          });
          document.getElementById("formId").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="px-10 md:px-20 pb-20"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center pt-5 font-playfair text-3xl md:text-4xl font-bold ">
        Contact Us
      </h1>

      <div className="pb-5 pt-5 mb-10">
        <div className="flex flex-col md:flex-row justify-between  items-center gap-10 md:gap-72">
          <div>
            <div className="flex items-center mt-4 p-2 border border-black w-1/2 justify-center mb-4 font-bold gap-2">
              <BiLocationPlus className="text-lg"></BiLocationPlus>
              <span className="text-sm uppercase ">Office Address</span>
            </div>
            <h3 className="text-2xl font-playfair font-bold pb-3">
              {data?.name}
            </h3>
            <p className=" font-playfair text-justify">
              {data?.address}
            </p>
            <div className="flex items-center mt-4 gap-2">
              <CgPhone className="text-lg"></CgPhone>
              <span className="text-sm">{data?.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold">@</h1>
              <span className="text-sm">{data?.email}</span>
            </div>
          </div>
          <div className="w-full ">
            <img className="" src={img1} alt=""></img>
            <div className="flex text-xl xs:mt-5 xs:justify-center gap-3">
              <a href={data?.facebook} rel="noreferrer" target="_blank" ><Icon icon="logos:facebook"></Icon></a>
              <a href={data?.instagram} rel="noreferrer" target="_blank" ><Icon icon="skill-icons:instagram"></Icon></a>
              <a href={data?.x} rel="noreferrer" target="_blank" ><Icon icon="logos:twitter"></Icon></a>

            </div>
          </div>
        </div>
      </div>

      <div className="border-2  border-black  px-8 py-10 ">
        <form id="formId" ref={form} onSubmit={sendEmail}>
          <div className="mr-4 md:mr-8">
            <div className="mb-4">
              <label
                className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <div className="flex pl-5 appearance-none border rounded-xl shadow-md ml-4 md:ml-8 bg-white items-center">
                <FaRegUserCircle className="text-xl text-[#1C1B1F]"></FaRegUserCircle>
                <input
                  className="  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name..."
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                htmlFor="name"
              >
                Your Email
              </label>
              <div className="flex pl-5 appearance-none border rounded-xl shadow-md ml-4 md:ml-8 bg-white items-center">
                <AiOutlineMail className="text-xl text-[#1C1B1F]"></AiOutlineMail>
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email..."
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                htmlFor="name"
              >
                Subject
              </label>
              <div className="flex pl-5 appearance-none border rounded-xl shadow-md ml-4 md:ml-8 bg-white items-center">
                <GrTextAlignFull className="text-xl text-[#1C1B1F]"></GrTextAlignFull>
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Subject"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                htmlFor="comments"
              >
                Messages
              </label>
              <div className="flex pl-5 appearance-none border rounded-xl shadow-md ml-4 md:ml-8 bg-white">
                <MdOutlineMessage className="text-xl mt-4 text-[#1C1B1F]"></MdOutlineMessage>
                <textarea
                  className=" w-full  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  name="message"
                  placeholder="Enter Your Messages"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-end ">
            <button
              className="flex text-xs md:text-lg fontStyle items-center gap-2 bg-black hover:bg-gray-700 text-white py-2 px-10  duration-300 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SEND
              <IoSendOutline className="text-xs md:text-xl font-extrabold"></IoSendOutline>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
