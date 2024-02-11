import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import UpdateHooks from "../../../../Hooks/UpdateHooks";
import PostHooks from "../../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import JoditEditor from "jodit-react";

const AdminProduct = () => {
  const editor = useRef(null);
  const f = useRef(null);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");
  const [img7, setImg7] = useState("");
  const [img8, setImg8] = useState("");
  const [img9, setImg9] = useState("");
  const [img10, setImg10] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    feature: "",
    category: "",
  });

  const {id}=useParams();

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/products/getProductsById/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data?.data));
  }, [id]);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `http://localhost:5000/api/v1/products/updateProducts/${formData?._id}`,
          { ...formData, img1: img1 ? img1 : formData?.img1,img2: img2 ? img2 : formData?.img2,img3: img3 ? img3 : formData?.img3,img4: img4 ? img4 : formData?.img4,img5: img5 ? img5 : formData?.img5,img6: img6 ? img6 : formData?.img6,img7: img7 ? img7 : formData?.img7,img8: img8 ? img8 : formData?.img8,img9: img9 ? img5 : formData?.img9,img10: img10 ? img10 : formData?.img10, }
        );
        toast?.success(`Products section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/Products/addProducts`,
          { ...formData, img1,img2,img3,img4,img5,img6,img7,img8,img9,img10},
          `Products data posted`
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
    }else if (name == "img6") {
      singleImageUpload(formData, setImg6);
    }else if (name == "img7") {
      singleImageUpload(formData, setImg7);
    }else if (name == "img8") {
      singleImageUpload(formData, setImg8);
    }else if (name == "img9") {
      singleImageUpload(formData, setImg9);
    }else if (name == "img10") {
      singleImageUpload(formData, setImg10);
    }
  };
  return (
    <div className="bg-white">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update Products Section</h1>
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
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Category:
          </label>
          <select  onChange={handleChange}
            value={formData?.category} name="category" required className="focus:outline-none w-full border p-2 rounded-md">
          <option disabled selected value="">Select</option>
          <option value="sofa">Sofa</option>
          <option value="curtain">Curtain</option>
          <option value="carpet">Carpet</option>
          <option value="wallpaper">Wallpaper</option>
          <option value="woodenFloor">Wooden Floor</option>
          </select>
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
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
          Features
          </label>
          <JoditEditor
          ref={f}
          value={formData?.feature}
          onChange={(newContent) => {
            setFormData({
              ...formData,
              "feature": newContent,
            })
          }}
        /> 
        </div>
<div className="grid lg:grid-cols-2 gird-cols-1 gap-2">
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
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img5?img5:formData?.img5} alt="img"></img>
        </div>

        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image six
          </label>
          <input
            type="file"
            name="img6"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img6?img6:formData?.img6} alt="img"></img>
        </div>

        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image seven
          </label>
          <input
            type="file"
            name="img7"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img7?img7:formData?.img7} alt="img"></img>
        </div>

        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image eight
          </label>
          <input
            type="file"
            name="img8"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img8?img8:formData?.img8} alt="img"></img>
        </div>

        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image nine
          </label>
          <input
            type="file"
            name="img9"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img9?img9:formData?.img9} alt="img"></img>
        </div>

        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image ten
          </label>
          <input
            type="file"
            name="img10"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img10?img10:formData?.img10} alt="img"></img>
        </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update Products !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProduct;
