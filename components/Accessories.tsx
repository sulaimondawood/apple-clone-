import React from "react";
import Phone from "../assets/phone.jpg";
const Accessories = () => {
  return (
    <div className=" w-full lg:w-[400px] h-[350px] lg:h-[450px] shadow-lg    rounded-xl px-6 pt-16 pb-6 flex flex-col justify-center items-center gap-4 bg-white">
      <img
        className="h-[200px] w-[100px] object-cover"
        src={Phone.src}
        alt=""
      />
      <div className="flex gap-2 justify-center">
        <button className=" bg-red-400 h-3 w-3 rounded-full"></button>
        <button className=" bg-red-400 h-3 w-3 rounded-full"></button>
        <button className=" bg-red-400 h-3 w-3 rounded-full"></button>
      </div>
      <div className="">
        <p className=" pb-3 text-sm text-red-400">New</p>
        <h1 className="text-md lg:text-xl  w-full text-m-black pb-3">
          iPhone 14 Silicone Case with MagSafe - Lilac
        </h1>
        <p className="pt-4 text-sm  text-gray-500">$49.00</p>
      </div>
    </div>
  );
};

export default Accessories;
