import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import UpdateHooks from "../../../../Hooks/UpdateHooks";
import PostHooks from "../../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import JoditEditor from "jodit-react";

const AdminService = () => {
  const editor = useRef(null);
  const [icon, setIcon] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const {id}=useParams();

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/service/getServiceById/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data?.data));
  }, [id]);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `http://localhost:5000/api/v1/Service/updateService/${formData?._id}`,
          { ...formData, img1: img1 ? img1 : formData?.img1,img2: img2 ? img2 : formData?.img2,img3: img3 ? img3 : formData?.img3,img4: img4 ? img4 : formData?.img4,img5: img5 ? img5 : formData?.img5,icon: icon ? icon : formData?.icon, }
        );
        toast?.success(`Service section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/Service/addService`,
          { ...formData, img1,img2,img3,img4,img5,icon},
          `Service data posted`
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
    const name = event?.target?.name;
    const formData = new FormData();
    formData.append("image", image);
    if (name == "img1") {
      singleImageUpload(formData, setImg1);
    } else if (name == "img2") {
      singleImageUpload(formData, setImg2);
    } else if (name == "img3") {
      singleImageUpload(formData, setImg3);
    } else if (name == "img4") {
      singleImageUpload(formData, setImg4);
    } else if (name == "img5") {
      singleImageUpload(formData, setImg5);
    }else if (name == "icon") {
      singleImageUpload(formData, setIcon);
    }
  };
  return (
    <div className="bg-white">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update Service Section</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 rounded shadow-md w-full mx-auto"
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Title:
          </label>
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            value={formData?.title}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
          Description
          </label>
          <JoditEditor
          ref={editor}
          value={formData?.description}
          onChange={(newContent) => {
            setFormData({
              ...formData,
              "description": newContent,
            })
          }}
        />
         
        </div>
        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Icon
          </label>
          <input
            type="file"
            name="icon"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={icon?icon:formData?.icon} alt="img"></img>
        </div>
        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image one
          </label>
          <input
            type="file"
            name="img1"
            onChange={handleChangeUploadImage}
            // ref={fileInputRef}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img1?img1:formData?.img1} alt="img"></img>
        </div>
        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image two
          </label>
          <input
            type="file"
            name="img2"
            onChange={handleChangeUploadImage}
            // ref={fileInputRef}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img2?img2:formData?.img2} alt="img"></img>
        </div>
        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image three
          </label>
          <input
            type="file"
            name="img3"
            onChange={handleChangeUploadImage}
            // ref={fileInputRef}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img3?img3:formData?.img3} alt="img"></img>
        </div>
        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image four
          </label>
          <input
            type="file"
            name="img4"
            onChange={handleChangeUploadImage}
            // ref={fileInputRef}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img4?img4:formData?.img4} alt="img"></img>
        </div>
        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image five
          </label>
          <input
            type="file"
            name="img5"
            onChange={handleChangeUploadImage}
            // ref={fileInputRef}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img5?img5:formData?.img5} alt="img"></img>
        </div>

        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update Service !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminService;
