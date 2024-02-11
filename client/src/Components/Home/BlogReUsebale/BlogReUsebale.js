import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogReUsebale = () => {
  const [data,setData]=useState([])
  useEffect(() => {
      fetch(`http://localhost:5000/api/v1/blog/getBlog`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data.length) {
            setData(data?.data);
          }
        });
    }, []);
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row gap-3 ">
          <div className="w-full  relative ">
            <img className=" h-96 md:h-80 w-full " src={data[0]?.img} alt=""></img>
            <div className="absolute top-5 md:top-11  mx-10">
              <div className="backdrop-blur-sm bg-white/5 border rounded border-gray-600 p-5 ">
                <h1 className=" text-[#FFFFFF] font-bold">{data[0]?.date}</h1>
                <h1 className="title w-full md:w-1/2 text-[#D0D0D0] text-xl md:text-3xl font-extrabold">
                  {data[0]?.title}
                </h1>
                <div className="title text-[#FFFFFF] font-thin text-xs mt-2 mb-5" dangerouslySetInnerHTML={{ __html: data[0]?.description?.slice(0,100) }}></div>
                <Link to={`/our-blog/${data[0]?._id}`}>
                  <button className="bg-[#191919] text-[#FFFFFF] px-6 py-1">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 md:grid-cols-3">
       {
        [...data]?.slice(0,3)?.reverse()?.map(d=> <div className=" relative">
        <img className=" w-full h-80 " src={d?.img} alt=""></img>
        <div className="absolute top-9 md:top-10  mx-10">
          <div className="backdrop-blur-sm bg-white/5 border rounded border-gray-600 p-5 ">
            <h1 className=" text-[#FFFFFF] font-bold">{d?.date}</h1>
            <h1 className="title text-[#D0D0D0] text-xl md:text-3xl font-extrabold">
            {d?.title?.slice(0,30)}
            </h1>
            
            <div className="title text-[#FFFFFF] font-thin text-xs mt-2 mb-5" dangerouslySetInnerHTML={{ __html: d?.description?.slice(0,150) }}></div>
            
            <Link to={`/our-blog/${d?._id}`}>
              <button className="bg-[#191919] text-[#FFFFFF] px-6 py-1">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>)
       }

      </div>
    </div>
  );
};

export default BlogReUsebale;
