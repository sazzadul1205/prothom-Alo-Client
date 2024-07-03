import React from "react";
import SportsLeft from "./SportsLeft/SportsLeft";
import SportsMiddle from "./SportsMiddle/SportsMiddle";

const Sports = () => {
  return (
    <div className="bg-white w-full text-black py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between gap-4">
        <SportsLeft />
        <div className="border border-black"></div>
        <SportsMiddle />
      </div>
    </div>
  );
};

export default Sports;
