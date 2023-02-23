import React from "react";
import Img from "../assets/msg.jpg";

const EducationCard = () => {
  return (
    <div className="p-6 rounded-xl bg-white w-full lg:w-[400px] h-[350px] shadow-lg">
      <p className="text-sm uppercase">education</p>
      <h1 className="text-m-black text-xl lg:text-2xl pt-3 font-semibold">
        Save on Mac or iPad with education pricing.1
      </h1>
      <img className="w-full h-[300px] object-cover" src={Img.src} alt="" />
    </div>
  );
};

export default EducationCard;
