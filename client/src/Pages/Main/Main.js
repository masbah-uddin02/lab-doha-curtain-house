import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../../Components/Home/Navbar/Topbar";
import Navbar from "../../Components/Home/Navbar/Navber";
import Footer from "../../Components/Home/Footer/Footer";

const Main = () => {
  return (
    <div className="relative">
      <Topbar></Topbar>
      <Navbar></Navbar> 
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Main;
