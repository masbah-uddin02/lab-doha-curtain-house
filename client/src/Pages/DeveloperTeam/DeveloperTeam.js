import React from "react";
import bg from "../../Assets/team/Frame 39.png";
import img1 from "../../Assets/team/Group 128.png";
import img2 from "../../Assets/team/Group 132.png";
import img3 from "../../Assets/team/Group 134.png";
import img4 from "../../Assets/team/Group 131.png";
import { Icon } from "@iconify/react";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import bg1 from "../../Assets/about/hero_bg (2).png";

const DeveloperTeam = () => {
  const teams = [
    {
      img: img1,
      name: "Amir Faysal",
      title: "Full-Stack Developer ",
      facebook: "https://www.facebook.com/amirfaysal047",
      whatsapp: "https://www.whatsapp.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      img: img2,
      name: "Masbah Uddin",
      title: "UI/UX Designer",
      facebook: "https://www.facebook.com/",
      whatsapp: "https://www.whatsapp.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      img: img3,
      name: "Rafia Binte Rashed",
      title: "Front-End Developer",
      facebook: "https://www.facebook.com/",
      whatsapp: "https://www.whatsapp.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      img: img4,
      name: "Ashikul Islam Ifty",
      title: "Full-Stack Developer",
      facebook: "https://www.facebook.com/",
      whatsapp: "https://www.whatsapp.com/",
      instagram: "https://www.instagram.com/",
    },
  ];
  return (
    <div className="p-10 bg-[#f2f1f1]"  style={{
      backgroundImage: `url("${bg1}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <h1 className="text-center font-playfair text-2xl md:text-4xl font-bold py-8 ">
        Meet Our Development Team
      </h1>

      <div className="grid grid-cols-1 pb-16 md:grid-cols-4 gap-6">
        {teams.map((t) => (
          <div
            style={{
              backgroundImage: `url("${bg}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="flex border-b-4 border-b-gray-600 justify-center border py-6 "
          >
            <div className="">
              <div className="flex justify-center">
                <img src={t.img} alt=""></img>
              </div>
              <div className="font-playfair text-center">
                <h1 className="text-3xl mt-5 font-semibold">{t.name}</h1>
                <p className="font-semibold pt-[2px]">{t.title}</p>
                {/* <div className="flex  pt-5 justify-center text-2xl  gap-3">
                  <BsFacebook></BsFacebook>
                  <IoLogoWhatsapp></IoLogoWhatsapp>
                  <AiFillInstagram></AiFillInstagram>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1>Contact Developer Team</h1>
      <p className=" font-bold">Amir Faysal</p>
      <p>Phone :+8801875071998</p>
      <p>whatsapp :+8801960064557</p>
      <p>Email : amirfaysal0471@gmail.com</p>

      </div>
    </div>
  );
};

export default DeveloperTeam;
