import React, { useEffect } from "react";
import { useState } from "react";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import { toast } from "react-toastify";
import PostHooks from "../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../Hooks/ImageUpload";

const AdminHero = () => {
  const [imageUrl,setImageUrl]=useState("");
  const [formData, setFormData] = useState({
    title1: "",
    title2: "",
    content1: "",
    content2: "",
    img:""
  });

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/hero/getHero`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setFormData(data?.data[0]);
          // setImageUrl(data?.data[0]?.img);
        }
      });
  }, []);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `http://localhost:5000/api/v1/hero/updateHero/${formData?._id}`,
          {...formData,img:imageUrl?imageUrl:formData?.img},
        );
        toast?.success(`Hero section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/hero/addHero`,
          {...formData,img:imageUrl},
          `hero data posted`
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
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setImageUrl);
  };
  return (
    <div className="bg-white">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update Hero Section</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 rounded shadow-md w-full mx-auto"
      >
        {
          formData?.img&&<div>
          <img className="md:w-[30%] w-[90%] max-auto rounded-lg" src={formData?.img} alt="img"></img>
        </div>
        }
          <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="teamImage"
          >
            Image
          </label>
          <input
            type="file"
            onChange={handleChangeUploadImage}
            // ref={fileInputRef}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Title-1:
          </label>
          <input
            type="text"
            name="title1"
            required
            onChange={handleChange}
            value={formData.title1}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Title-2:
          </label>
          <input
            type="text"
            name="title2"
            required
            onChange={handleChange}
            value={formData.title2}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
      
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Content-1:
          </label>
          <textarea
            name="content1"
            required
            onChange={handleChange}
            value={formData.content1}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Content-2:
          </label>
          <textarea
            name="content2"
            required
            onChange={handleChange}
            value={formData.content2}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update Hero !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminHero;
