import React from "react";
import BlogReUsebale from "../../Components/Home/BlogReUsebale/BlogReUsebale";
import bg from "../../Assets/BackgroundImage/hero_bg (1).png";

const BlogPage = () => {
  return (
    <div
      className="pl-[40px] pr-[40px]  "
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-center font-playfair text-2xl md:text-4xl pt-5 font-bold mb-2 ">
        Our Blogs
      </h1>
      <p className="text-center mb-8 w-1/2 mx-auto font-playfair">
        We use an agile approach to test assumptions and connect with the needs
        of your audience early and often.
      </p>
      <BlogReUsebale></BlogReUsebale>
   
    </div>
  );
};

export default BlogPage;
