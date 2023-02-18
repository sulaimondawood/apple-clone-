import Image from "next/image";
import React from "react";
import Shoe from "../assets/shoe.png";
import LatestCard from "../components/LatestCard";

import Doc from "../assets/doc.jpg";
import Accessories from "../components/Accessories";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
const Store = () => {
  return (
    <div className="bg-m-white">
      <div className="flex mt-36 justify-center items-center">
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

      <div className="flex flex-col mt-36 pl-96   justify-start">
        <h1 className="text-ml-black text-3xl pb-5 font-semibold">
          The latest.
          <span className="text-ml3-gray ">
            Take a look at what's new, right now
          </span>
        </h1>
        <div className="flex gap-3 ">
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </div>
      </div>

      {/* Help center */}
      <div className="flex flex-col mt-20 pl-96">
        <h1 className="text-ml-black text-3xl pb-5 font-semibold">
          Help is here.
          <span className="text-ml3-gray ">
            Whenever and however you need it.
          </span>
        </h1>
        <div className="flex gap-4 ">
          <div className="w-[480px] shadow-lg  bg-white rounded-xl p-6">
            <p className="text-m-black pb-3">APPLE SPECIALIST</p>
            <h1 className="text-2xl font-semibold w-full text-m-black pb-3">
              Shop one on one with a Specialist. Online or in a store
            </h1>

            <img
              className="h-[350px] w-full object-cover"
              src={Doc.src}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-10 rounded-xl h-1/2 w-[450px]">
              <h1 className="text-m-black font-semibold text-xl w-[300px]">
                Get to know your new device with a free Personal Session
              </h1>
            </div>
            <div className="bg-gradient-to-br rounded-xl px-10 py-14 flex items-center font-semibold from-blue-200  to-red-200 h-1/2">
              <h1 className="text-m-black text-xl w-[300px]">
                Get expert service and support at the Genius Bar.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Accessories */}
      <div className="flex flex-col mt-20 pl-96">
        <h1 className="text-ml-black text-3xl pb-5 font-semibold">
          Accessories.
          <span className="text-ml3-gray ">
            Essentials that pair perfectly with your favorite devices.
          </span>
        </h1>
        <div className="flex gap-4">
          <Accessories />
          <Accessories />
          <Accessories />
          <Accessories />
        </div>
      </div>

      {/* loud and clear  */}
      <div className="flex flex-col mt-20 pl-96">
        <h1 className="text-ml-black text-3xl pb-5 font-semibold">
          Loud and clear.
          <span className="text-ml3-gray ">
            Unparalleled choices for rich, high-quality sound.
          </span>
        </h1>
        <div className="flex gap-4">
          <Accessories />
          <Accessories />
          <Accessories />
          <Accessories />
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-col mt-20 pl-96">
        <h1 className="text-ml-black text-3xl pb-5 font-semibold">
          The Apple experience.
          <span className="text-ml3-gray ">
            Do even more with Apple products and services.
          </span>
        </h1>
        <div className="flex gap-4">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-col mt-20 pl-96">
        <h1 className="text-ml-black text-3xl pb-5 font-semibold">
          Special stores.
          <span className="text-ml3-gray ">
            Exclusive savings for businesses, school, and more.
          </span>
        </h1>
        <div className="flex gap-4">
          <EducationCard />
          <EducationCard />
          <EducationCard />
        </div>
      </div>
    </div>
  );
};

export default Store;
