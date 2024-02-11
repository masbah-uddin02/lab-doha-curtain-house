import React, { useEffect } from "react";
import { useState } from "react";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import { toast } from "react-toastify";
import PostHooks from "../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../Hooks/ImageUpload";

const AdminContact = () => {
  const [imageUrl,setImageUrl]=useState("");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    facebook: "",
    instagram: "",
    x: "",
    phone: "",
    email: "",
    img:""
  });

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/contact/getContact`)
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
          `http://localhost:5000/api/v1/contact/updateContact/${formData?._id}`,
          {...formData,img:imageUrl?imageUrl:formData?.img},
        );
        toast?.success(`Contact section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/contact/addContact`,
          {...formData,img:imageUrl},
          `contact data posted`
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
        <h1>Update Contact Section</h1>
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
          >
            Image
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
            htmlFor="name"
          >
            Office Name:
          </label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Office Address:
          </label>
          <input
            type="text"
            name="address"
            required
            onChange={handleChange}
            value={formData.address}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            required
            onChange={handleChange}
            value={formData.phone}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Email:
          </label>
          <input
            type="text"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            FB-url:
          </label>
          <input
            type="text"
            name="facebook"
            required
            onChange={handleChange}
            value={formData.facebook}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            instagram-url:
          </label>
          <input
            type="text"
            name="instagram"
            required
            onChange={handleChange}
            value={formData.instagram}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            X-url:
          </label>
          <input
            type="text"
            name="x"
            required
            onChange={handleChange}
            value={formData.x}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
      
        
        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update Contact !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminContact;
