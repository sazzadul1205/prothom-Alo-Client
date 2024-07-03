import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import BSearch from "./BSearch/BSearch";
import BanNews from "./BanNews/BanNews";

const Bangladesh = () => {
  return (
    <div className="bg-white w-full text-black py-4 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-4 border-t-4 border-gray-400">
          <h1 className="text-black text-xl font-bold hover:text-blue-400 flex mt-4 ">
            বাংলাদেশ
            <FaGreaterThan className="text-red-500 text-xl ml-4 mt-1" />
          </h1>
        </div>
        <div>
          <BSearch></BSearch>
          <BanNews></BanNews>
        </div>
      </div>
    </div>
  );
};

export default Bangladesh;
