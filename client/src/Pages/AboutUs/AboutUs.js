import React from "react";
import img1 from "../../Assets/about/Frame (1).png";
import img2 from "../../Assets/about/SvgjsSvg1001.png";
import img3 from "../../Assets/about/SvgjsG1008.png";
import meet1 from "../../Assets/about/Rectangle 41.png";
import bg from "../../Assets/about/hero_bg (2).png";
import element1 from "../../Assets/about/Element 1.png";
import element2 from "../../Assets/about/Element 2.png";
import element3 from "../../Assets/about/Element 3.png";
import owner from "../../Assets/owner/owner.png"
const AboutUs = () => {
  const meetItems = [
    {
      img: owner,
      title: "Owner",
      name: "Yeasin Arafath",
    },
   
  ];

  const items = [
    {
      num: "01",
      title: "Sofa/Chair",
      subtitle: "Upholstery Service",
      des: "Our comprehensive range of services includes top-notch Sofa/Chair Upholstery, Sofa Cushion Making, and Sofa Repair to breathe new life into your beloved furniture pieces. Our skilled craftsmen meticulously restore and revitalize your sofas and chairs, ensuring both comfort and style.",
    },
    {
      num: "02",
      title: "Revitalize Your Sofa with Expert ",
      subtitle: "Cushion Making and Repair Services",
      des: "Revive your sofa with our expert Sofa Cushion Making and Repair services. Our skilled craftsmen specialize in creating custom cushions that provide optimal comfort and support, tailored to your preferences. Additionally, we offer top-notch sofa repair services to address any issues such as sagging seats, loose springs, or damaged upholstery.",
    },
    {
      num: "03",
      title: "Majlis Upholstery & Work: ",
      subtitle: "Elevate Your Space",
      des: "Experience the perfect blend of traditional charm and modern sophistication with our Majlis Upholstery & Work services. Transform your space into an inviting haven with our expert craftsmanship and attention to detail.",
    },
    {
      num: "04",
      title: "Professional ",
      subtitle: "Carpet Installation",
      des: "Enhance your space with our expert Carpet Installation service. Trust our skilled team to transform your floors with quality carpets, adding warmth, comfort, and style to any room.",
    },
    {
      num: "05",
      title: "Custom ",
      subtitle: "Curtain Blinds",
      des: "Elevate your windows with our custom Curtain Blinds Making & Installation service. Experience the perfect blend of style and functionality as our expert team crafts and installs bespoke curtain blinds that enhance privacy, control light, and elevate the aesthetic appeal of your space.",
    },
    {
      num: "06",
      title: "Stunning",
      subtitle: "Wallpaper Sale & Installation",
      des: "Revitalize your space with our stunning Wallpaper Sale & Installation service. Choose from a wide selection of captivating designs and patterns as our experts bring a new dimension of style and personality to your walls, creating a truly transformative ambiance.",
    },
  ];
  return (
    <div
      className="px-10 bg-[#f2f1f1]"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center pb-3 md:pb-0 pt-5 font-playfair text-3xl md:text-4xl font-bold ">
        About Us
      </h1>

      <div className="pb-5 border-b-2 border-b-[#8f8e8e] mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-72">
          <div className="font-playfair">
            <h3 className="text-2xl font-bold pb-2">Doha Curtain House</h3>
            <p className="text-sm text-justify">
              At Doha Curtain House, we are passionate about furniture. Our
              journey began with a deep appreciation for the beauty and
              functionality of well-crafted pieces, and over the years, we've
              evolved into a one-stop destination for furniture repair and
              sales. We take pride in our commitment to preserving the integrity
              of your beloved pieces and offering a carefully curated selection
              of furniture that will enhance your living space.
            </p>
          </div>
          <div className="w-full ">
            <img className="" src={img1} alt=""></img>
          </div>
        </div>
      </div>

      <div className="pb-5  mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20 ">
          <div className="font-playfair">
            <h3 className="text-2xl font-bold pb-2">Our Story</h3>
            <p className="text-sm text-justify">
              Founded in 2019, Doha Curtain House has a rich history of
              providing top-notch furniture services. What started as a small
              repair workshop has now grown into a full-fledged furniture repair
              and sales shop. We owe our success to our dedicated team of
              skilled artisans and our loyal customers who have entrusted us
              with their furniture needs for years.
            </p>
          </div>
          <div className="font-playfair">
            <h3 className="text-2xl font-bold pb-2">Our Objective</h3>
            <p className="text-sm text-justify">
              Founded in 5, Doha Curtain House has a rich
              history of providing top-notch furniture services. What started as
              a small repair workshop has now grown into a full-fledged
              furniture repair and sales shop. We owe our success to our
              dedicated team of skilled artisans and our loyal customers who
              have entrusted us with their furniture needs for years.
            </p>
          </div>
        </div>
      </div>

      {/* what we do  */}
      <div className="pt-10">
        <h1 className="text-center font-playfair text-2xl md:text-3xl font-bold ">
          What We Do
        </h1>
        <hr className="my-5 w-1/6 mx-auto border border-black"></hr>
        <div className="grid grid-cols-1 pt-5 md:grid-cols-3 gap-x-5 gap-y-16">
          {items.map((i) => (
            <div className="flex gap-3">
              <h1 className="text-4xl fontStyle font-thin">{i.num}.</h1>
              <div className="font-playfair text-justify">
                <h2 className="text-xl font-semibold">{i.title}</h2>
                <h3 className="text-xl font-semibold pb-2">{i.subtitle}</h3>
                <p className="text-sm">{i.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* element  */}
      <div className="grid grid-cols-1 mt-14 gap-10 md:grid-cols-3">
        <div className="relative">
          <img className=" w-full" src={element1} alt="" />
          <div className="font-playfair absolute top-10 md:top-14 right-10 md:right-16">
            <h1 className="text-3xl">1256+</h1>
            <p className="font-semibold">Satisfied Client</p>
          </div>
        </div>
        <div className="relative">
          <img className=" w-full" src={element2} alt="" />
          <div className="font-playfair absolute top-10 md:top-14 right-10 md:right-16">
            <h1 className="text-3xl">1256+</h1>
            <p className="font-semibold">Satisfied Client</p>
          </div>
        </div>
        <div className="relative">
          <img className=" w-full" src={element3} alt="" />
          <div className="font-playfair absolute top-10 md:top-14 right-10 md:right-16">
            <h1 className="text-3xl">1256+</h1>
            <p className="font-semibold">Satisfied Client</p>
          </div>
        </div>
        
      </div>

      {/* mission  */}
      <div className=" border-b border-b-[#6A6A6D] my-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-72">
          <div className="font-playfair">
            <h3 className="text-2xl font-bold pb-2">Our Mission</h3>
            <hr className=" w-1/4  border border-black"></hr>
            <p className="text-sm pt-5 text-justify">
              At Doha Curtain House, we are passionate about furniture. Our
              journey began with a deep appreciation for the beauty and
              functionality of well-crafted pieces, and over the years, we've
              evolved into a one-stop destination for furniture repair and
              sales. We take pride in our commitment to preserving the integrity
              of your beloved pieces and offering a carefully curated selection
              of furniture that will enhance your living space.
            </p>
          </div>
          <div className="w-full ">
            <img className="" src={img2} alt=""></img>
          </div>
        </div>
      </div>

      <div className="border-b pb-3 border-b-[#6A6A6D] my-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-72">
          <div className="w-full ">
            <img className="" src={img3} alt=""></img>
          </div>

          <div className="font-playfair">
            <h3 className="text-2xl font-bold pb-2">Our Vision</h3>
            <hr className=" w-1/4  border border-black"></hr>
            <p className="text-sm pt-5 text-justify">
              At Doha Curtain House, we are passionate about furniture. Our
              journey began with a deep appreciation for the beauty and
              functionality of well-crafted pieces, and over the years, we've
              evolved into a one-stop destination for furniture repair and
              sales. We take pride in our commitment to preserving the integrity
              of your beloved pieces and offering a carefully curated selection
              of furniture that will enhance your living space.
            </p>
          </div>
        </div>
      </div>

      {/* team  */}
      <div className="pt-5 pb-20">
        <h1 className="text-center font-playfair text-2xl md:text-4xl font-bold ">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 pt-10 md:grid-cols-3 gap-16">
          {meetItems.map((m) => (
            <div className="border-[2px] font-playfair border-[#C4C4C4] p-2">
              <img className=" w-full" src={m.img} alt="" />
              <p className="text-2xl  font-bold mt-2">{m.name}</p>
              <p className="">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
