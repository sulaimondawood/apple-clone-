import React from "react";
import Laps from "../assets/lap.jpg";
const ExperienceCard = () => {
  return (
    <div className="bg-white w-[400px] shadow-lg rounded-xl px-6 pb-6 pt-14">
      <h1 className="text-2xl text-m-black font-semibold pb-4">
        We've got you covered.
      </h1>
      <p className=" text-m-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sit
        qui ex laboriosam eius sunt?
      </p>
      <img className="" src={Laps.src} alt="" />
    </div>
  );
};

export default ExperienceCard;
