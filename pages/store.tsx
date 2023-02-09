import Image from "next/image";
import React from "react";
import Shoe from "../assets/shoe.png";

const Store = () => {
  return (
    <div className="bg-m-white">
      <div className="flex mt-32 justify-center items-center">
        <h1 className="text-5xl max-w-4xl font-semibold">
          <span className="text-m-black">Store.</span>
          <span className="text-ml3-gray">
            The best way to buy the products you love.
          </span>
        </h1>
      </div>
      <div
        className="
      relative  flex justify-end gap-8  pr-20  items-center  "
      >
        <div className="flex flex-col  items-center justfy-center ">
          <img className="w-[150px]" src={Shoe.src} alt="" />
          <p className="text-sm text-m-black">Shoe</p>
        </div>
        <div className="flex flex-col  items-center justfy-center ">
          <img className="w-[150px]" src={Shoe.src} alt="" />
          <p className="text-sm text-m-black">Shoe</p>
        </div>
        <div className="flex flex-col  items-center justfy-center ">
          <img className="w-[150px]" src={Shoe.src} alt="" />
          <p className="text-sm text-m-black">Shoe</p>
        </div>
        <div className="flex flex-col  items-center justfy-center ">
          <img className="w-[150px]" src={Shoe.src} alt="" />
          <p className="text-sm text-m-black">Shoe</p>
        </div>
        <div className="flex flex-col  items-center justfy-center ">
          <img className="w-[150px]" src={Shoe.src} alt="" />
          <p className="text-sm text-m-black">Shoe</p>
        </div>
        <div className="flex flex-col  items-center justfy-center ">
          <img className="w-[150px]" src={Shoe.src} alt="" />
          <p className="text-sm text-m-black">Shoe</p>
        </div>
        <div className="flex flex-col  items-center justfy-center ">
          <img className="w-[150px]" src={Shoe.src} alt="" />
          <p className="text-sm text-m-black">Shoe</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start">
        <h1 className="text-ml-black">
          The latest.{" "}
          <span className="text-ml3-gray">
            Take a look at what's new, right now{" "}
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Store;
