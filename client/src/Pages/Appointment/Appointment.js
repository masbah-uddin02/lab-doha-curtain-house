import React, { useEffect, useState } from "react";
import { IoSendOutline } from "react-icons/io5";
import bg from "../../Assets/hero/bg hero section.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GrTextAlignFull, GrLocation } from "react-icons/gr";
import { MdOutlineMessage, MdLocationCity } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Appointment = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    date: '',
    time: '',
    city:'',
    address:'',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/v1/appointment/addAppointments', formData); 

      setFormData({
        name: '',
        email: '',
        phone:'',
        date: '',
        time: '',
        city:'',
        address:'',
      });

      // send mail after success request
      emailjs
      .sendForm(
        "service_obglrdr",
        "template_hhmjt7m",
        form.current,
        "yna2rCo3j4pXbMkWt"
      )
      .then(
        (result) => {
          toast.success("Appointment Successfully Submitted")
          document.getElementById("appointmentForm").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );


     
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <div
      className="bg-[#f4f4f4] pb-12 px-10 md:px-20"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center font-playfair py-8 text-2xl md:text-4xl font-bold ">
        Get Appointment
      </h1>

      <div className="border-2  border-black  px-8 py-10 ">
        <form id="appointmentForm" ref={form} onSubmit={handleSubmit}>
          <div className="mr-4 md:mr-8">
            <div className="mb-4">
              <label
                className="block font-playfair  text-gray-700 text-xl md:text-2xl font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <div className="flex pl-5 appearance-none border rounded-xl shadow-md  bg-white items-center">
                <FaRegUserCircle className="text-xl text-[#1C1B1F]"></FaRegUserCircle>
                <input
                  className="  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Name..."
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block font-playfair  text-gray-700 text-xl md:text-2xl font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <div className="flex pl-5 appearance-none border rounded-xl shadow-md  bg-white items-center">
                <BiSolidPhone className="text-xl text-[#1C1B1F]"></BiSolidPhone>
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Phone Number"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                htmlFor="name"
              >
                Email
              </label>
              <div className="flex pl-5 appearance-none border rounded-xl shadow-md  bg-white items-center">
                <AiOutlineMail className="text-xl text-[#1C1B1F]"></AiOutlineMail>
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Your Email..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-16">
              <div className="mb-4">
                <label
                  className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="shadow-md  appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                />
              </div>
              <div className="mb-4 ">
                <label
                  className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                  htmlFor="time"
                >
                  Time
                </label>
                <input
                  className="shadow-md  appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  type="time"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
              <div className="">
                <label
                  className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                  htmlFor="date"
                >
                  Address
                </label>
                <div className="flex pl-5 appearance-none border rounded-xl shadow-md  bg-white items-center">
                  <GrLocation className="text-xl text-[#1C1B1F]"></GrLocation>
                  <input
                    className=" w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="address"
                    value={formData.address}
                  onChange={handleChange}
                    type="text"
                    placeholder="Enter Your address."
                  />
                </div>
              </div>
              <div className="">
                <label
                  className="block font-playfair text-gray-700 text-xl md:text-2xl font-bold mb-2"
                  htmlFor="date"
                >
                  City
                </label>
              <div className="flex appearance-none border rounded-xl shadow-md  bg-white items-center">
                <MdLocationCity className="text-xl text-[#1C1B1F]"></MdLocationCity>
                <input
                  className=" w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your city"
                />
              </div>
              </div>
            </div>
          </div>

          <div className="flex mt-8 justify-end ">
            <button
              className="flex text-xs md:text-lg fontStyle items-center gap-2 bg-black hover:bg-gray-700 text-white py-2 px-4  md:px-10  duration-300 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              BOOK APPOINTMENT
              <IoSendOutline className="text-xs md:text-xl font-extrabold"></IoSendOutline>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
