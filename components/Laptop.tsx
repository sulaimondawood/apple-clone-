import Image from "next/image";
import Link from "next/link";
import React from "react";
import Screen from "../assets/icons/screen1.png";
const Laptop = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 border-b border-gray-300 w-fit mx-auto items-center">
        <div className="relative -z-10 w-32 lg:w-44 h-32 lg:h-40">
          <Image src={Screen.src} fill alt="name" />
        </div>
        <p className="text-xl font-semibold text-m-black">MackBook Air</p>
        <p className="text-xs text-m-gray">M1 chip</p>
        <p className="text-xs text-m-gray">From $599</p>
        <Link
          className="bg-blue-500 text-blue-100 text-sm p-2 lg:p-4 rounded-full"
          href=""
        >
          Buy
        </Link>
        <Link href="" className="text-blue-500 p-3 lg:p-4 rounded-full">
          Learn more
        </Link>
      </div>
      <div className="flex items-center flex-col gap-10">
        <div className="flex-col items-center flex gap-2">
          <h1 className="text-2xl text-m-black font-semibold">13.3</h1>
          <p className="text-black text-xs">Retina display</p>
        </div>
        <div className="flex-col items-center flex gap-2">
          <h1 className="text-2xl text-m-black font-semibold">13.3</h1>
          <p className="text-black text-xs">Retina display</p>
        </div>
        <div className="flex-col items-center flex gap-2">
          <h1 className="text-2xl text-m-black font-semibold">13.3</h1>
          <p className="text-black text-xs">Retina display</p>
        </div>
        <div className="flex-col items-center flex gap-2">
          <h1 className="text-2xl text-m-black font-semibold">13.3</h1>
          <p className="text-black text-xs">Retina display</p>
        </div>
        <div className="flex-col items-center flex gap-2">
          <h1 className="text-2xl text-m-black font-semibold">13.3</h1>
          <p className="text-black text-xs">Retina display</p>
        </div>
        <div className="flex-col items-center flex gap-2">
          <h1 className="text-2xl text-m-black font-semibold">13.3</h1>
          <p className="text-black text-xs">Retina display</p>
        </div>
        <div className="flex-col items-center flex gap-2">
          <h1 className="text-2xl text-m-black font-semibold">13.3</h1>
          <p className="text-black text-xs">Retina display</p>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
