import React, { SyntheticEvent, useState } from "react";
import Icon from "../assets/icons/1.svg";
import Icon2 from "../assets/icons/2.svg";
import Icon3 from "../assets/icons/3.svg";
import Icon4 from "../assets/icons/4.svg";
import Icon5 from "../assets/icons/5.svg";
import Icon6 from "../assets/icons/6.svg";
import Icon7 from "../assets/icons/7.svg";
import Icon8 from "../assets/icons/8.svg";
import Icon9 from "../assets/icons/9.svg";
import Icon10 from "../assets/icons/10.svg";
import Icon11 from "../assets/icons/11.svg";
import Icon12 from "../assets/icons/12.svg";
import Icon13 from "../assets/icons/13.svg";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Mac = () => {
  const [border, setBorder] = useState(true);
  const [border2, setBorder2] = useState(false);
  const setBorderColor = () => {
    setBorder(!border);
    console.log("done");
  };
  const setBorderColor2 = () => {
    setBorder2(!border2);
    console.log("done");
  };
  return (
    <div>
      <div className="flex mt-20 px-4 lg:px-0 gap-10 justify-center items-center">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 3,
              width: 300,
            },
            1000: {
              slidesPerView: 9,
              width: 1000,
            },
          }}
        >
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 items-center flex gap-2 flex-col"
            >
              <Image src={Icon} alt="icon" />
              <p className="text-xs">Displays</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon6} alt="icon" />
              <p className="text-xs">iMac 24"</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon7} alt="icon" />
              <p className="text-xs">Accessories</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon8} alt="icon" />
              <p className="text-xs">Compare</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon9} alt="icon" />
              <p className="text-xs">Ventura</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon10} alt="icon" />
              <p className="text-xs">Mac Pro</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon11} alt="icon" />
              <p className="text-xs">Shop Mac</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon12} alt="icon" />
              <p className="text-xs">MacBook Pro</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon13} alt="icon" />
              <p className="text-xs">MacBook Air</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex mt-20 flex-col gap-2">
        <div className="bg-pro   w-screen  lg:w-full bg-center h-[500px] lg:h-[736px]">
          <h1 className=" text-m-white text-3xl lg:text-5xl font-semibold pt-12 lg:pt-28 text-center">
            MacBook Pro
          </h1>
          <h2 className="text-lg font-semibold   lg:text-3xl lg:pt-4  leading-[50px] text-center text-m-white ">
            Mover. Maker. Boundary breaker.
          </h2>
          <p className="text-m-white leading-10 lg:pt-4 text-center text-md lg:text-lg">
            From $1999
          </p>
          <div className="flex text-blue-500 text-md lg:pt-4 lg:text-lg justify-center gap-10 items-center ">
            <Link
              href=""
              className="bg-blue-500 text-blue-100 p-3 lg:p-4 rounded-full"
            >
              Buy
            </Link>
            <Link href="/order">Learn more </Link>
          </div>
        </div>
        <div className="bg-macmini3   w-screen  lg:w-full bg-center h-[500px] lg:h-[736px]">
          <h1 className=" text-m-white text-3xl lg:text-5xl font-semibold pt-12 lg:pt-28 text-center">
            Mac mini
          </h1>
          <h2 className="text-lg font-semibold   lg:text-3xl lg:pt-4  leading-[50px] text-center text-m-white ">
            More muscle. More hustle.
          </h2>
          <p className="text-m-white leading-10 lg:pt-4 text-center text-md lg:text-lg">
            From $599
          </p>
          <div className="flex text-blue-500 text-md lg:pt-4 lg:text-lg justify-center gap-10 items-center ">
            <Link
              href=""
              className="bg-blue-500 text-blue-100 p-3 lg:p-4 rounded-full"
            >
              Buy
            </Link>
            <Link href="/order">Learn more </Link>
          </div>
        </div>
      </div>
      {/* question */}
      <div className="mt-20">
        <h1 className="text-3xl lg:text-5xl text-m-black text-center font-semibold">
          Which Mac is right for you?
        </h1>
        <div className="flex justify-center mx-auto mt-14 w-fit   pb-3">
          <p
            onClick={() => setBorderColor()}
            className={
              border
                ? `text-m-gray border-b-gray-800 border-b pb-4 text-lg cursor-pointer
            `
                : "border-b-gray-300 text-m-gray border-b pb-4 text-lg cursor-pointer"
            }
          >
            Laptop
          </p>
          <div className="border-b-gray-300 w-[50px] h-[1px] self-end border-b"></div>
          <p
            onClick={() => setBorderColor2()}
            className={
              border2
                ? `text-m-gray border-b-gray-800 border-b pb-4 text-lg cursor-pointer
            `
                : "border-b-gray-300 text-m-gray border-b pb-4 text-lg cursor-pointer"
            }
          >
            Desktop
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mac;
