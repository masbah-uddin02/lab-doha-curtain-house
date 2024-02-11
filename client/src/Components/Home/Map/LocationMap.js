import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LocationMap = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/footer/getFooter`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setData(data?.data[0]);
        }
      });
  }, []);
  return (
    <div className="flex justify-center items-center">
      <iframe
        title="Doha curtain and sofa upholstery service"
        className="w-full"
        src={data?.locationUrl}
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationMap;
