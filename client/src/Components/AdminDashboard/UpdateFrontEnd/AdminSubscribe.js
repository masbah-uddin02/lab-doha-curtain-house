import React, { useEffect } from "react";
import { useState } from "react";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import { toast } from "react-toastify";
import PostHooks from "../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../Hooks/ImageUpload";

const AdminSubscribe = () => {
  const [bgImg,setBgImg]=useState("");
  const [shortImg,setShortImg]=useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/subscribe/getSubscribe`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setFormData(data?.data[0]);
        }
      });
  }, []);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `http://localhost:5000/api/v1/subscribe/updateSubscribe/${formData?._id}`,
          {...formData,shortImg:shortImg?shortImg:formData?.shortImg,bgImg:bgImg?bgImg:formData?.bgImg},
        );
        toast?.success(`Subscribe section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/subscribe/addSubscribe`,
          {...formData,shortImg,bgImg},
          `subscribe data posted`
        );
      }
    } catch (error) {
      toast?.success(error);
    }
  };

  // set data in state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const name = event.target.name;
    const formData = new FormData();
    formData.append("image", image);
    if(name=="shortImg"){

        singleImageUpload(formData, setShortImg);
    }else{
        singleImageUpload(formData, setBgImg);
    }
  };
  return (
    <div className="bg-white">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update Subscribe Section</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 rounded shadow-md w-full mx-auto"
      >
        {
          formData?.bgImg&&<div>
          <img className="md:w-[30%] w-[90%] max-auto rounded-lg" src={formData?.bgImg} alt="img"></img>
        </div>
        }
          <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Background Image
          </label>
          <input
            type="file"
            name="bgImg"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        {
          formData?.shortImg&&<div>
          <img className="md:w-[30%] w-[90%] max-auto rounded-lg" src={formData?.shortImg} alt="img"></img>
        </div>
        }
          <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Short Image
          </label>
          <input
            type="file"
            name="shortImg"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            value={formData.title}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        
      
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            required
            onChange={handleChange}
            value={formData.description}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          ></textarea>
        </div>
       
        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update Subscribe !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSubscribe;
