import React, { useEffect, useState } from "react";
import bg from "../../Assets/about/hero_bg (2).png";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const { id } = useParams();

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blog/getBlogById/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blog/getBlog`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setAllData(data?.data);
        }
      });
  }, [id]);

  return (
    <div
      className="py-10 px-10 bg-[#f2f1f1]"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3">
          <img className=" w-full mt-3 h-80 " src={data?.img} alt=""></img>
          <div className="pt-6">
            <span className="px-5 py-2  text-[#FFFFFF] bg-[#0000007d] font-bold">
              {data?.date}
            </span>
            <div>
              <div
                className="font-playfair text-justify mt-5 flex flex-col gap-8 text-lg"
                dangerouslySetInnerHTML={{ __html: data?.description }}
              ></div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <p className="font-playfair text-2xl mb-3 font-semibold">
            Popular Blogs
          </p>

          <div className="flex flex-col gap-6">
            {[...allData]
              ?.slice(0, 4)
              ?.reverse()
              ?.map((d) => (
                <div className=" relative">
                  <img  className=" w-full h-80 " src={d?.img} alt=""></img>
                  <div className="absolute top-9 md:top-10  mx-10">
                    <div className="backdrop-blur-sm bg-white/5 border rounded border-gray-600 p-5 ">
                      <h1 className=" text-[#FFFFFF] font-bold">{d?.date}</h1>
                      <h1 className="title text-[#D0D0D0] text-xl md:text-3xl font-extrabold">
                        {d?.title?.slice(0,30)}
                      </h1>

                      <div
                        className="title text-[#FFFFFF] font-thin text-xs mt-2 mb-5"
                        dangerouslySetInnerHTML={{
                          __html: d?.description?.slice(0, 150),
                        }}
                      ></div>

                      <Link to={`/our-blog/${d?._id}`}>
                        <button className="bg-[#191919] text-[#FFFFFF] px-6 py-1">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
