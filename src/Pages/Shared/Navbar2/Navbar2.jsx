import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdOutlineNewspaper } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

const Navbar2 = () => {
  const NavLinks = (
    <>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/"}>সর্বশেষ</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/politics"}>রাজনীতি</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/bangladesh"}>বাংলাদেশ</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/crime"}>অপরাধ</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/world"}>বিশ্ব</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/business"}>বাণিজ্য</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/opinion"}>মতামত</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/sports"}>খেলা</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/entertainment"}>বিনোদন</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/jobs"}>চাকরি</NavLink>
      </li>
      <li className="text-sm pr-3 hover:text-blue-400 font-normal">
        <NavLink to={"/lifestyle"}>জীবনযাপন</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white border-b-2 w-full h-16 text-black border-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar z-10 justify-between bg-white text-black max-w-screen-xl mx-auto p-0 border-b-2 border-black">
          <div className="navbar-center flex justify-center lg:flex">
            <ul className="gap-2 menu-horizontal px-1 pt-2">{NavLinks}</ul>
          </div>
          <div>
            <button className=" border-l  px-3 py-4 flex hover:text-blue-400">
              <FaSearch className="text-xl mr-1" />
              <span className="text-sm">Search</span>
            </button>
            <button className=" border-l  px-3 py-4 flex hover:text-blue-400">
              <MdOutlineNewspaper className="text-xl mr-1" />
              <span className="text-sm">E-Paper</span>
            </button>
            <button className="  border-l  px-3 py-4 flex hover:text-blue-400">
              <CiGlobe className="text-xl mr-1" />
              <span className="text-sm">Eng</span>
            </button>
            <button className="  border-l  px-3 py-4 flex hover:text-blue-400">
              <FaUser className="text-xl mr-1" />
              <span className="text-sm">Login</span>
            </button>
            <button className=" border-l border-r px-3 py-4 hover:text-blue-400">
              <IoMdMenu className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
