import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthUser from '../../Hooks/authUser';

const AdminDashboardNav = () => {
  const { userInfo, logout } = AuthUser();
  const [issideNavOpen, setSidenavOpen] = useState(false);

  //show  frontend
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  //show blog
  const [openBlog, setOpenBlog] = useState(false);

  //show sidenav on toggle
  const handleToggle = () => {
    issideNavOpen === true ? setSidenavOpen(false) : setSidenavOpen(true);
  };

 
  let activeStyle = {
    backgroundColor: "#D6D6D6",
    color:"black"
  };
  return (
    <ul className="space-y-2 pt-8">
      <li>
        <NavLink
          to={"overview"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >
          <span className="text-lg">
            <Icon icon="bxs:dashboard" />
          </span>

          <span className="">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"admin-appointment"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >
          <span className="text-lg">
            <Icon icon="mdi:account-student" />
          </span>

          <span className="">All Appointment </span>
        </NavLink>
      </li>
 
    

      <li>
        <span
          onClick={() => setOpenProduct(!openProduct)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="solar:server-square-update-bold" />
            </span>
            <span className="">Products</span>
          </div>
          <span
            className={`text-xl transition_move ${openProduct === true ? "rotate-180" : ""
              }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openProduct === true ? "block" : "hidden"
            }`}
        >
         
         
          <li onClick={handleToggle}>
            <NavLink
              to={"addProduct"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Add Product</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allProducts"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">All Products</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <span
          onClick={() => setOpenBlog(!openBlog)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="solar:server-square-update-bold" />
            </span>
            <span className="">Blogs</span>
          </div>
          <span
            className={`text-xl transition_move ${openBlog === true ? "rotate-180" : ""
              }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openBlog === true ? "block" : "hidden"
            }`}
        >
         
         
          <li onClick={handleToggle}>
            <NavLink
              to={"addBlog"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Add Blog</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allBlogs"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">All Blogs</span>
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <span
          onClick={() => setOpenReview(!openReview)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="carbon:review" />
            </span>
            <span className="">Reviews</span>
          </div>
          <span
            className={`text-xl transition_move ${openReview === true ? "rotate-180" : ""
              }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openReview === true ? "block" : "hidden"
            }`}
        >
         
         
          <li onClick={handleToggle}>
            <NavLink
              to={"addReview"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Add Review</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allReviews"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">All Reviews</span>
            </NavLink>
          </li>
        </ul>
      </li>
    

      {/* frontend */}
      <li>
        <span
          onClick={() => setOpenFrontend(!openFrontend)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="solar:server-square-update-bold" />
            </span>
            <span className="">Update Frontend</span>
          </div>
          <span
            className={`text-xl transition_move ${openFrontend === true ? "rotate-180" : ""
              }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openFrontend === true ? "block" : "hidden"
            }`}
        >
         
          <li onClick={handleToggle}>
            <NavLink
              to={"updateHero"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Update Hero</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"updateContact"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Update Contact</span>
            </NavLink>
          </li>
          <li>
        <span
          onClick={() => setOpenService(!openService)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="solar:server-square-update-bold" />
            </span>
            <span className="">Service</span>
          </div>
          <span
            className={`text-xl transition_move ${openService === true ? "rotate-180" : ""
              }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openService === true ? "block" : "hidden"
            }`}
        >
         
         
          <li onClick={handleToggle}>
            <NavLink
              to={"addService"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Add Service</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allService"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">All Service</span>
            </NavLink>
          </li>
        </ul>
      </li>

      
      
          <li onClick={handleToggle}>
            <NavLink
              to={"updateTopBar"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Update TopBar</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"updateSubscribe"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Update Subscribe</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"updateHappyClient"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Update HappyClient</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"updateFooter"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              <span className="ml-3">Update Footer</span>
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <NavLink
          to={"changePassword"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >
          <span className="text-lg">
            <Icon icon="basil:edit-outline" />
          </span>

          <span className="">Change Password</span>
        </NavLink>
      </li>
      <li
        onClick={logout}
        className="flex cursor-pointer items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
      >
        <span className="text-lg">
          <Icon icon="tabler:logout" />
        </span>

        <span className="">LogOut</span>
      </li>
    </ul>
  );
};

export default AdminDashboardNav;