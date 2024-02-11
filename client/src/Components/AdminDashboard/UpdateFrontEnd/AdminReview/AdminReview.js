import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import UpdateHooks from "../../../../Hooks/UpdateHooks";
import PostHooks from "../../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
import { useParams } from "react-router-dom";

const AdminReview = () => {

  const [img, setImg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    review: "",
    location: "",
  });

  const {id}=useParams();

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/review/getReviewById/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data?.data));
  }, [id]);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `http://localhost:5000/api/v1/review/updateReview/${formData?._id}`,
          { ...formData, img: img ? img : formData?.img }
        );
        toast?.success(`Review section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/Review/addReview`,
          { ...formData,img},
          `Review data posted`
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
      singleImageUpload(formData, setImg);
   
  };
  return (
    <div className="bg-white">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update Review Section</h1>
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
            Name:
          </label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={formData?.name}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Location:
          </label>
          <input
            type="text"
            name="location"
            required
            onChange={handleChange}
            value={formData?.location}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

      
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
          Review
          </label>
          <textarea name="review" onChange={handleChange}
            value={formData?.review} className="border w-full focus:outline-none p-2 rounded-md">
            </textarea> 
        </div>
        <div className="flex gap-3 items-center">
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Image
          </label>
          <input
            type="file"
            name="img"
            onChange={handleChangeUploadImage}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      <img className="w-[70px] rounded-md shadow-lg" src={img?img:formData?.img} alt="img"></img>
        </div>


        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update Review !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminReview;
