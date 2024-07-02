import React from "react";
import icon from "../../../assets/Footer/com.png";

import IconsAndPlay from "./IconsAndPlay";
import FMore from "./FMore";
import End from "./End";

const Footer = () => {
  return (
    <div className="bg-white border-b w-full h-{123px} text-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="border-t border-b ">
          <div>
            <img src={icon} className="py-5" />
          </div>
          <div className="grid grid-cols-6 gap-4 py-5 font-light">
            <div>নাগরিক সংবাদ</div>
            <div>কিশোর আলো</div>
            <div>বিজ্ঞানচিন্তা</div>
            <div>প্রথম আলো ট্রাস্ট</div>
            <div>বন্ধুসভা</div>
            <div>চিরন্তন ১৯৭১</div>
            <div>ইপেপার</div>
            <div>প্রথমা</div>
            <div>মোবাইল ভ্যাস</div>
          </div>
        </div>
        <IconsAndPlay></IconsAndPlay>
        <FMore></FMore>
        <End></End>
      </div>
    </div>
  );
};

export default Footer;
