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
import Photos from "../assets/icons/photos.jpg";
import Safari from "../assets/icons/safari.jpg";
import Pages from "../assets/icons/pages.jpg";
import IMovie from "../assets/icons/imovie.jpg";
import Random from "../assets/icons/appstore.png";
import Numbers from "../assets/icons/number.jpg";
import FinalCut from "../assets/icons/finalcut.jpg";
import Compressor from "../assets/icons/compressor.jpg";
import LogicPro from "../assets/icons/logicpro.jpg";
import MainStage from "../assets/icons/mainstage.jpg";
import Motion from "../assets/icons/motion.jpg";
import OneLogo from "../assets/icons/onelogo.jpg";
import NewPlus from "../assets/icons/newsplus.png";
import PayLogo from "../assets/icons/paylogo.png";

import Bg2 from "../assets/bg2.jpg";
import NewsPlus from "../assets/newsplus.jpg";
import Pay from "../assets/pay.jpg";
import Bundle from "../assets/bundle.jpg";
import AccessoriesI from "../assets/accessories.jpg";
import Trade from "../assets/trade.jpg";
import Delivery from "../assets/icon-delivery.png";
import Finance from "../assets/icon-finance.svg";
import Help from "../assets/icon-help.svg";
import Family from "../assets/family.jpg";
import Ventura from "../assets/ventura.jpg";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Laptop from "../components/Laptop";
import Accessories from "../components/Accessories";
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
    <div className="bg-white w-full pb-20">
      <div className="flex -z-500 mt-20 px-4 lg:px-0 gap-10 justify-center items-center">
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
              <p className="text-xs">Displays</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href=""
              className="hover:text-blue-700 justify-center items-center flex gap-2 flex-col"
            >
              <Image src={Icon6} alt="icon" />
              <p className="text-xs">iMac 24 &ldquo;</p>
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
        <h1 className="text-3xl lg:text-5xl px-4 lg:px-0 text-m-black text-center font-semibold">
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

        <div className="grid grid-cols-2 px-4 lg:px-80 lg:grid-cols-4">
          <Laptop />
          <Laptop />
          <Laptop />
          <Laptop />
        </div>
      </div>

      <div className="flex-col px-4  flex gap-8">
        <div className="bg-bg px-4 mt-40  py-20  h-[450px] bg-no-repeat object-cover bg-top lg:bg-center w-full lg:w-[80rem] mx-auto ">
          <div className="flex lg:pl-12 items-center gap-4 max-w-xl flex-col">
            <h2 className="text-m-white lg:font-semibold  text-xl">
              Behind the Mac
            </h2>
            <h2 className="text-m-white font-semibold text-3xl lg:text-5xl">
              Hear the Force.
            </h2>
            <p className=" text-sm lg:text-lg max-w-sm text-center text-m-white">
              Learn how the pros at Skywalker Sound push the limits of sonic
              storytelling.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[80rem] mx-auto lg:flex-row items-center justify-center  ">
          <div
            className="bg-gray-100 py-20 mx-auto
         w-fit px-4 h-[370px]  bg-no-repeat "
          >
            <div className="flex lg:pl-12 items-center gap-4 max-w-xl flex-col">
              <h2 className="text-m-black font-semibold text-center text-3xl lg:text-5xl">
                Get 3% Daily Cash back with Apple Card.
              </h2>
              <p className=" text-sm lg:text-lg max-w-sm text-center text-m-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia cum omnis saepe vel, praesentium atque iste, doloremque
                eius incidunt odit magnam dolorum minima. Similique, sint.
              </p>
            </div>
          </div>
          <div className="">
            <img src={Bg2.src} alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-[80rem] mx-auto justify-center">
          <div className="flex flex-col w-full  py-10 items-center bg-gray-100  gap-3">
            <p className="font-medium text-m-black text-xl">Accessories</p>
            <h1 className="text-3xl text-center  font-semibold text-m-black">
              Explore Mac accessories.
            </h1>
            <button className="bg-blue-700 text-blue-200 py-1 px-2 rounded-full">
              Shop
            </button>
            <div className="relative w-full  lg:w-[39rem] mt-8 h-52 lg:h-72">
              <Image fill src={AccessoriesI.src} alt="img" />
            </div>
          </div>

          <div className="flex flex-col w-full px-4 lg:px-0 pt-10 items-center bg-gray-100  gap-3">
            <p className="font-medium text-m-black text-xl">Apple Trade In</p>
            <h1 className="text-3xl text-center  font-semibold text-m-black">
              Get credit toward a new Mac.
            </h1>
            <button className="text-m-black text-center lg:max-w-md">
              Just trade in your elgible computer for credit or recycle it for
              free. it's good for you and the planet.
            </button>
            <div className="relative w-full  lg:w-96 mt-8 h-44 lg:h-64">
              <Image fill src={Trade.src} alt="img" />
            </div>
          </div>
        </div>
      </div>

      {/* Learn more */}
      <div className="grid grid-cols-1 items-start px-4 lg:px-20 gap-8 lg-gap-0 w-full lg:w-[80rem] mx-auto mt-20 lg:grid-cols-3 ">
        <div className="flex px-6  text-center items-center justify-center flex-col gap-4">
          <img className="w-8" src={Delivery.src} alt="" />
          <p className="text-m-black font-semibold">Fast delivery or pickup</p>
          <p className="">
            Enjoy two-hour delivery from an Apple Store, free delivery or easy
            pickup.
          </p>
        </div>
        <div className="flex px-6  text-center items-center justify-center flex-col gap-4">
          <img className="w-8" src={Delivery.src} alt="" />
          <p className="text-m-black font-semibold">Pay monthly at 0% APR</p>
          <p className="">
            You can pay over time when you choose to check out with Apple Card
            Monthly installment.
          </p>
        </div>
        <div className="flex px-6 text-center items-center justify-center flex-col gap-4">
          <img className="w-10" src={Help.src} alt="" />
          <p className="text-m-black font-semibold">Get help buying</p>
          <p className="">
            Have a question? Call a specialist or chat online. 000-000-000
          </p>
        </div>
      </div>

      {/* what makes  a make  amke  */}
      <div className="mt-20 px-4 lg:px-20 w-full lg:w-[80rem] mx-auto">
        <h1 className="font-semibold text-m-black text-3xl lg:text-5xl text-center ">
          What makes a Mac a Mac?
        </h1>
        <div
          className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-8 
        
        
        "
        >
          <div className=" bg-ml-gray py-10 col-span-2 lg:col-span-1 flex flex-col gap-2 items-center">
            <h1 className="text-m-black text-3xl font-semibold">
              Mac does <span className="bg-green-500">that.</span>
            </h1>
            <p className="text-m-black">Discover what Mac can do for you</p>
            <p className="text-m-blue">Learn more</p>
            <div className="relative w-full lg:w-96 h-60 lg:h-96">
              <Image src={Family.src} fill alt="img" />
            </div>
          </div>
          <div className=" bg-ml-gray py-10 flex flex-col col-span-2 lg:col-span-1   gap-2 items-center">
            <p className="text-lg text-m-black text-center">Continuity</p>
            <h1 className="text-m-black text-3xl text-center max-w-sm font-semibold">
              All your devices. One seamless experience.
            </h1>
            <p className="text-m-black">Discover what Mac can do for you</p>
            <p className="text-m-blue">Learn more</p>
            <div className="relative w-full lg:w-96 h-60 lg:h-96">
              <Image src={Family.src} fill alt="img" />
            </div>
          </div>
          <div className="bg-ml-gray w-full col-span-2 lg:px-20  py-10 flex flex-col lg:flex-row justify-between items-center">
            <div className="  flex flex-col gap-2 items-center">
              <p className="text-lg text-m-black text-center">macOS Ventura</p>
              <h1 className="text-m-black text-3xl lg:text-5xl text-center max-w-sm font-semibold">
                Works smarter.
              </h1>
              <h1 className="text-m-black text-3xl lg:text-5xl text-center max-w-sm font-semibold">
                Plays harder.
              </h1>
              <h1 className="text-m-black text-3xl lg:text-5xl text-center max-w-sm font-semibold">
                Goes further.
              </h1>

              <p className="text-m-blue">Learn more</p>
            </div>
            <div className="relative w-full lg:w-[35rem]  h-60 lg:h-96">
              <Image src={Ventura.src} fill alt="img" />
            </div>
          </div>

          {/* Built in apps section */}

          <div className="col-span-2 py-10 bg-ml-gray px-4">
            <h1 className="text-m-black text-3xl lg:text-5xl text-center  font-semibold">
              Built-in Apps
            </h1>
            <p className="text-m-black text-center mx-auto pt-2 max-w-2xl w-full">
              Powerful creativity and productivity tools live inside every Mac -
              apps that help you explore, connnect and work more efficiently.
            </p>

            <div className="flex flex-wrap gap-4 lg:gap-14 items-center mt-7 justify-center">
              <img src={Safari.src} alt="" />
              <img src={Photos.src} alt="" />
              <img src={IMovie.src} alt="" />
              <img src={Pages.src} alt="" />
              <img src={Numbers.src} alt="" />
              <img src={Random.src} alt="" />
            </div>
          </div>

          {/* Pro apps section */}

          <div className="col-span-2 py-10 bg-ml-gray px-4">
            <h1 className="text-m-black text-3xl lg:text-5xl text-center  font-semibold">
              Pro Apps
            </h1>
            <p className="text-m-black text-center mx-auto pt-2 max-w-2xl w-full">
              FOr professional ready to push their creativity, these
              industry-leading apps offer maximum control over editing,
              processing and output of music and film.
            </p>

            <div className="flex flex-wrap gap-4 lg:gap-14 items-center mt-7 justify-center">
              <img src={Compressor.src} alt="" />
              <img src={FinalCut.src} alt="" />
              <img src={LogicPro.src} alt="" />
              <img src={MainStage.src} alt="" />
              <img src={Motion.src} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-m-black  text-3xl lg:text-5xl text-center  font-semibold">
            Get more out of Mac
          </h1>

          <div className="flex flex-col gap-4 lg:gap-10  justify-center">
            <div className="flex flex-col-reverse gap-12  lg:flex-row bg-ml-gray px-4 lg:px-20 py-10 lg:py-20  mt-14 justify-between items-center">
              <div className="relative w-full ">
                <Image src={Bundle} alt="" />
              </div>
              <div className="flex flex-col gap-4 items-center justify-between">
                <div className="relative w-20 lg:w-60">
                  <Image src={OneLogo} alt=" " />
                </div>
                <p className="text-lg font-semibold text-center max-w-xs">
                  Bundle up to six Apple servises. And enjoy more or less.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row  gap-12 justify-center items-center">
              <div className="flex flex-col w-full bg-ml-gray py-10 lg:px-10 gap-3 items-center justify-center">
                <img src={PayLogo.src} alt="" />
                <p className="text-m-black px-5 max-w-sm text-center">
                  The safer way to make secure, contactless purchase in stores
                  and online
                </p>
                <img
                  className="pt-5 h-auto -mb-10 lg:-mb-0 lg:h-64"
                  src={Pay.src}
                  alt=""
                />
              </div>

              <div className="flex flex-col w-full  bg-ml-gray py-10 lg:px-10 gap-3 items-center justify-center">
                <img src={NewPlus.src} alt="" />
                <p className="text-m-black px-5 max-w-sm text-center">
                  Get 3 months of Apple News free when you buy a Mac
                </p>
                <img
                  className="pt-5 h-52 lg:h-64 -mb-10 lg:-mb-0 "
                  src={NewsPlus.src}
                  alt=""
                />
              </div>
            </div>

            {/* at work */}
            <div className="bg-business bg-center px-6 py-44">
              <h1 className="text-m-white text-center pb-8  text-3xl lg:text-5xl">
                Apple at Work
              </h1>
              <p className="text-m-white text-center pb-3">
                Get the Power to take your business to the next level.
              </p>
              <div className="flex flex-col items-center justify-center gap-2">
                <button className="text-m-white text-center">
                  Learn about Apple at Work
                </button>
                <button className="text-m-white text-center">
                  Learn more about Mac for business
                </button>
              </div>
            </div>
            {/* at school */}
            <div className="bg-education px-6 bg-center py-44">
              <h1 className="text-m-white text-center pb-8  text-3xl lg:text-5xl">
                Apple and Education
              </h1>
              <p className="text-m-white text-center pb-3">
                Empowering educators and students to move the world forward.
              </p>
              <div className="flex flex-col items-center justify-center gap-2">
                <button className="text-m-white text-center">
                  Learn about Apple and Education
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mac;
