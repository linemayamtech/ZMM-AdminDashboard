import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
// import { ImUser } from "react-icons/im";
import { BsShop } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { TbUserPentagon } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { TbPremiumRights } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";


const SideNavbar = () => {
  return (
    <>
      <div className="px-5 py-10 pb-20 bg-[#171C26] flex flex-col gap-5 fixed w-1/6 h-screen">
        <div className="flex gap-3">
          <div>
            <img src={require("../assets/Abu Photo.png")} alt="Profile" />
          </div>
          <div>
            <h1 className="text-white">Jack Thomas</h1>
            <p className="text-gray-400">Admin</p>
          </div>
        </div>
        <div className="border border-[#979797] rounded-md flex px-5 items-center">
          <input
            className="w-full border-none outline-none rounded-md text-white py-2 bg-[#171C26]"
            type="search"
            placeholder="Search"
          />
          <span className="text-gray-300">
            <FaSearch />
          </span>
        </div>
        <div className="flex flex-col py-3 gap-3 overflow-y-scroll scrollbar-hide">
          
          
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="dashboard"
          >
            <span className="text-white"><MdOutlineSpaceDashboard /></span>
            Dashboard
          </NavLink>
          
       
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="websitesettings"
          >
            <span><FaGlobe /></span>
            Website Settings
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="buyer"
          >
            <span><LuShoppingCart />
            </span>
            Buyer
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="productsellers"
          >       
          <span><BsShop />

          </span>
            Product Sellers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="osp"
          >
            <span><TbUserPentagon />
            </span>
            OSP
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="products"
          >
            <span><AiFillProduct /></span>
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="services"
          >
            <span><GrServices />
            </span>
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="productrfq"
          >
            <span><IoDocumentTextOutline />
            </span>
            Product RFQ & Quotes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="servicerfq"
          >
            <span><HiOutlineDocumentSearch />
            </span>
            Services RFQ & Quotes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="order"
          >
            <span><TbPremiumRights />
            </span>
            Order & Subscription
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="tickets"
          >
            <span><IoTicketSharp />
            </span>
            Tickets
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="settings"
          >
            <span><CiSettings />
            </span>
            Settings
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
