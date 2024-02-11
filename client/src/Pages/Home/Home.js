import React from "react";
import Navber from "../../Components/Home/Navbar/Navber";
import Banner from "../../Components/Home/Banner/Banner";
import Services from "../../Components/Home/Services/Services";
import Topbar from "../../Components/Home/Navbar/Topbar";
import LatestProduct from "../../Components/Home/LatestProduct/LatestProduct";
import LatestBlog from "../../Components/Home/LatestBlog/LatestBlog";
import Subscribe from "../../Components/Home/Subscribe/Subscribe";
import BestQuality from "../../Components/Home/BestQuality/BestQuality";
import Review from "../../Components/Home/Review/Review";
import Clients from "../../Components/Home/Clients/Clients";
import LocationMap from "../../Components/Home/Map/LocationMap";

const Home = () => {
    return (
        <div className='bg-[#f2f1f1]'>
           
            <Banner></Banner>
            <Services></Services>
            <LatestProduct></LatestProduct>
            <LatestBlog></LatestBlog>
            <Review></Review>
            <Clients></Clients>
            <Subscribe></Subscribe>
            <BestQuality></BestQuality>
            <LocationMap></LocationMap>
      {/* <h2 className='text-center mt-20 text-4xl font-bold'>Home page element here</h2>
            <h2 className='text-center mt-2 text-4xl font-bold text-primary'>Primary color</h2>
            <h2 className='text-center mt-2 text-4xl font-bold text-secondary'>secondary color</h2> */}
    </div>
  );
};

export default Home;
