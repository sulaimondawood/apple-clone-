import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "../assets/icons/ipad/ipad.svg";
import Icon2 from "../assets/icons/ipad/ipadacc.svg";
import Icon3 from "../assets/icons/ipad/ipadair.svg";
import Icon4 from "../assets/icons/ipad/ipadmini.svg";
import Icon5 from "../assets/icons/ipad/ipadcomp.svg";
import Icon6 from "../assets/icons/ipad/ipados.svg";
import Icon7 from "../assets/icons/ipad/ipadpro.svg";
import Icon8 from "../assets/icons/ipad/shop.svg";
import Icon9 from "../assets/icons/ipad/keyboard.svg";

import IpadHero from "../assets/ipad/ipadhero.jpg";
import Laptop from "../components/Laptop";
import Ipad from "../components/Ipad";
const ipad = () => {
  return (
    <div className="w-full ">
      <div className="flex -z-500 mt-20 px-4 lg:px-0 gap-4 justify-center items-center">
        <Swiper
          className="-z-50"
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
              <p className="text-xs">iPad</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon2} alt="icon" />
              <p className="text-xs">Accessories &ldquo;</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon3} alt="icon" />
              <p className="text-xs">iPad Air</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon4} alt="icon" />
              <p className="text-xs">iPad mini</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon5} alt="icon" />
              <p className="text-xs">Compare</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon6} alt="icon" />
              <p className="text-xs">iPadOs</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon7} alt="icon" />
              <p className="text-xs">iPad Pro</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon8} alt="icon" />
              <p className="text-xs">Shop iPad</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon9} alt="icon" />
              <p className="text-xs">Keyboards</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-white mt-6 py-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-5 items-center justify-center">
          <img src={IpadHero.src} alt="" />
          <div className="">
            <h1
              className="text-3xl lg:text-5xl text-m-black font-semibold
           text-center "
            >
              iPad
            </h1>
            <p
              className="text-xl  font-semibold
           text-center "
            >
              Lovable. Drawable
            </p>
            <p
              className="text-xl  font-semibold
           text-center "
            >
              .Magical
            </p>
            <p className="text-ml2-gray leading-10 lg:pt-4 text-center text-md lg:text-lg">
              From $449
            </p>
            <div className="flex flex-col text-blue-500 text-md lg:pt-4 lg:text-lg justify-center gap-4 items-center ">
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
      </div>

      <div className="bg-ipadbg px-96 py-48 object-cover object-center w-full h-auto">
        <div className="">
          <h1
            className="text-3xl text-white lg:text-5xl font-semibold
           text-left self-center justify-self-center"
          >
            iPad Pro
          </h1>
          <p
            className="text-xl text-white font-semibold
           text-left "
          >
            Supercharged by <img src="" alt="" />
          </p>

          <p className="text-ml-gray leading-10 lg:pt-4 text-left text-md lg:text-lg">
            From $799
          </p>
          <div className="flex flex-col text-blue-500 text-md lg:pt-4 lg:text-lg justify-center gap-4 items-start ">
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

      <div className="mt-20">
        <h1 className="text-3xl lg:text-5xl px-4 lg:px-0 text-m-black text-center font-semibold">
          Which iPad is right for you?
        </h1>

        <div className="grid grid-cols-2 pt-10 px-4 lg:px-80 lg:grid-cols-5">
          <Ipad />
          <Ipad />
          <Ipad />
          <Ipad />
          <Ipad />
        </div>
      </div>
    </div>
  );
};

export default ipad;
