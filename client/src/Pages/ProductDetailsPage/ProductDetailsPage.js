import React, { useEffect, useState } from "react";
import img from "../../Assets/products/sofa/Rectangle 15 (13).png";
import design1 from "../../Assets/products/productDetails/Rectangle 38.png";
import design2 from "../../Assets/products/productDetails/Rectangle 39.png";
import design3 from "../../Assets/products/productDetails/Rectangle 40 (1).png";
import design4 from "../../Assets/products/productDetails/Rectangle 41 (3).png";
import design5 from "../../Assets/products/productDetails/Rectangle 42 (1).png";
import design6 from "../../Assets/products/productDetails/Rectangle 43 (1).png";
import design7 from "../../Assets/products/productDetails/Rectangle 44 (1).png";
import design8 from "../../Assets/products/productDetails/Rectangle 47.png";
import design9 from "../../Assets/products/productDetails/Rectangle 46.png";
import design10 from "../../Assets/products/productDetails/Rectangle 45 (1).png";
import design11 from "../../Assets/products/productDetails/Rectangle 38.png";
import design12 from "../../Assets/products/productDetails/Rectangle 39 (1).png";
import design13 from "../../Assets/products/productDetails/Rectangle 40 (2).png";
import design14 from "../../Assets/products/productDetails/Rectangle 41 (4).png";
import design15 from "../../Assets/products/productDetails/Rectangle 44 (2).png";
import design16 from "../../Assets/products/productDetails/Rectangle 47 (1).png";
import design17 from "../../Assets/products/productDetails/Rectangle 46 (1).png";
import bg from "../../Assets/about/hero_bg (2).png";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const fstColoumn = [design1, design2, design3, design4];
  const secoundColoumn = [design11, design12, design13, design14];
  const [data,setData]=useState([])

  const {id}=useParams();

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/products/getProductsById/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, [id]);

  return (
    <div
      className="p-10 bg-[#f2f1f1]"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-80">
        <div className="">
          <h1 className=" font-playfair text-2xl md:text-3xl font-bold">
            {data?.title}
          </h1>
          <div className="font-playfair mt-3  gap-8 flex">
            <div className="w-3 flex justify-center  items-center h-[200px]">
              <h2 className="tracking-widest uppercase text-[#00000080] text-2xl font-bold transform -rotate-90">
                Description
              </h2>
            </div>
            <div className="text-justify">
            <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
            </div>
          </div>
        </div>
        <img className="h-[297px] w-[328px]" src={data?.img1} alt=""></img>
      </div>

      {/* key features  */}
      <div>
        <h1 className="font-playfair text-2xl md:text-4xl font-bold pb-5 pt-16 ">
          Key Features:
        </h1>
        <div dangerouslySetInnerHTML={{ __html: data?.feature }}></div>
      </div>

      {/* choose your design  */}
      <div>
        <h1 className="text-center font-playfair text-2xl md:text-4xl font-bold pt-20 pb-7">
          Choose your Design
        </h1>

        {/* fst colom  */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            
            {
              data?.img2&&<img src={data?.img2} alt=""></img>
            }
            {
              data?.img3&&<img src={data?.img3} alt=""></img>
            }
            {
              data?.img4&&<img src={data?.img4} alt=""></img>
            }
            {
              data?.img5&&<img src={data?.img5} alt=""></img>
            }
            {
              data?.img6&&<img src={data?.img6} alt=""></img>
            }
            {
              data?.img7&&<img src={data?.img7} alt=""></img>
            }
            {
              data?.img8&&<img src={data?.img8} alt=""></img>
            }
            {
              data?.img9&&<img src={data?.img9} alt=""></img>
            }
            {
              data?.img10&&<img src={data?.img10} alt=""></img>
            }
        
        </div>

       
      </div>
    </div>
  );
};

export default ProductDetailsPage;
