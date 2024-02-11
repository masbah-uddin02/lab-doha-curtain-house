import React, { useEffect } from "react";
import { useState } from "react";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import { toast } from "react-toastify";
import PostHooks from "../../../Hooks/PostHooks";

const AdminHappyClient = () => {
  const [formData, setFormData] = useState({
    clients: 0,
    network: 0,
    projects: 0,
  });

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/happyClient/getHappyClient`)
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
          `http://localhost:5000/api/v1/happyClient/updateHappyClient/${formData?._id}`,
          formData,
        );
        toast?.success(`HappyClient section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/happyClient/addHappyClient`,
         formData,
          `happyClient data posted`
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

  return (
    <div className="bg-white">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update HappyClient Section</h1>
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
            Clients:
          </label>
          <input
            type="number"
            name="clients"
            required
            onChange={handleChange}
            value={formData.clients}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Network
          </label>
          <input
            type="number"
            name="network"
            required
            onChange={handleChange}
            value={formData.network}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Projects
          </label>
          <input
            type="number"
            name="projects"
            required
            onChange={handleChange}
            value={formData.projects}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
    
      
        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update HappyClient !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminHappyClient;
