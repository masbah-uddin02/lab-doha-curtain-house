import React, { useEffect } from "react";
import { useState } from "react";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import { toast } from "react-toastify";
import PostHooks from "../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../Hooks/ImageUpload";

const AdminTopBar = () => {
  const [imageUrl,setImageUrl]=useState("");
  const [formData, setFormData] = useState({
    offer: "",
    deliveryLocation: "",
    phone: "",
    logo: "",
  });

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/topBar/getTopBar`)
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
          `http://localhost:5000/api/v1/topBar/updateTopBar/${formData?._id}`,
          {...formData,logo:imageUrl?imageUrl:formData?.logo},
        );
        toast?.success(`TopBar section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/topBar/addTopBar`,
          {...formData,logo:imageUrl},
          `topBar data posted`
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
        <h1>Update TopBar Section</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 rounded shadow-md w-full mx-auto"
      >
        {
          formData?.logo&&<div>
          <img className="md:w-[10%] w-[20%] max-auto rounded-lg" src={formData?.logo} alt="img"></img>
        </div>
        }
          <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Logo
          </label>
          <input
            type="file"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Offer
          </label>
          <input
            type="text"
            name="offer"
            required
            onChange={handleChange}
            value={formData.offer}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Delivery Location
          </label>
          <input
            type="text"
            name="deliveryLocation"
            required
            onChange={handleChange}
            value={formData.deliveryLocation}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
      
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Number
          </label>
          <textarea
            name="phone"
            required
            onChange={handleChange}
            value={formData.phone}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          ></textarea>
        </div>
       
        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update TopBar !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminTopBar;
