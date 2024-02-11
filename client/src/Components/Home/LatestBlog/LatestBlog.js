import React, { useEffect, useState } from "react";
import BlogReUsebale from "../BlogReUsebale/BlogReUsebale";
import bg from "../../../Assets/BackgroundImage/BG (13).png";

const LatestBlog = () => {

  return (
    <div
      className="pl-[40px] pr-[40px]  "
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <h1 className="text-center font-playfair text-2xl md:text-4xl font-bold pb-8 pt-20 ">
        Our Latest Blogs
      </h1>
      <BlogReUsebale></BlogReUsebale>
    </div>
  );
};

export default LatestBlog;
