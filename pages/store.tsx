import Image from "next/image";
import React from "react";
import Shoe from "../assets/shoe.png";
import LatestCard from "../components/LatestCard";

import Doc from "../assets/doc.jpg";
import Accessories from "../components/Accessories";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Store = () => {
  return (
    <div className="bg-m-white">
      <div className="flex mt-24 lg:mt-36 justify-center items-center">
        <h1 className=" px-4 lg:px-0 text-2xl lg:text-5xl lg:max-w-4xl font-semibold">
          <span className="text-m-black">Store.</span>
          <span className="text-ml3-gray">
            The best way to buy the products you love.
          </span>
        </h1>
      </div>
      <div
        className="
      relative overflow-hidden  flex justify-end gap-8  lg:ml-96 lg:pr-20 px-4 lg-px-0 items-center  "
      >
        <Swiper
          // className="-z-[2000]"
          spaceBetween={40}
          grabCursor={true}
          breakpoints={{
            300: {
              width: 300,
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 6,
              width: 800,
            },

            1440: {
              slidesPerView: 6,
              width: 1440,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col  items-center justfy-center ">
              <img className="w-[150px]" src={Shoe.src} alt="" />
              <p className="text-sm text-m-black">Shoe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  items-center justfy-center ">
              <img className="w-[150px]" src={Shoe.src} alt="" />
              <p className="text-sm text-m-black">Shoe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  items-center justfy-center ">
              <img className="w-[150px]" src={Shoe.src} alt="" />
              <p className="text-sm text-m-black">Shoe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  items-center justfy-center ">
              <img className="w-[150px]" src={Shoe.src} alt="" />
              <p className="text-sm text-m-black">Shoe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  items-center justfy-center ">
              <img className="w-[150px]" src={Shoe.src} alt="" />
              <p className="text-sm text-m-black">Shoe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  items-center justfy-center ">
              <img className="w-[150px]" src={Shoe.src} alt="" />
              <p className="text-sm text-m-black">Shoe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  items-center justfy-center ">
              <img className="w-[150px]" src={Shoe.src} alt="" />
              <p className="text-sm text-m-black">Shoe</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" px-4 lg:px-0 flex flex-col mt-36 lg:pl-96 w-full   justify-start">
        <h1 className="text-ml-black text-xl lg:text-3xl pb-5 font-semibold">
          The latest.
          <span className="text-ml3-gray ">
            Take a look at what's new, right now
          </span>
        </h1>
        <div className="flex justify-between overflow-hidden">
          <Swiper
            spaceBetween={50}
            breakpoints={{
              300: {
                slidesPerView: 1.05,
                width: 300,
              },
              768: {
                slidesPerView: 2,
                width: 768,
              },
              1300: {
                slidesPerView: 3,
                width: 1300,
              },
            }}
          >
            <SwiperSlide>
              <LatestCard />
            </SwiperSlide>
            <SwiperSlide>
              <LatestCard />
            </SwiperSlide>
            <SwiperSlide>
              <LatestCard />
            </SwiperSlide>
            <SwiperSlide>
              <LatestCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Help center */}
      <div className="flex flex-col mt-20 px-4 lg:pl-96">
        <h1 className="text-ml-black text-xl lg:text-3xl pb-5 font-semibold">
          Help is here.
          <span className="text-ml3-gray ">
            Whenever and however you need it.
          </span>
        </h1>

        <div className="flex gap-4 ">
          <Swiper
            spaceBetween={10}
            grabCursor={true}
            breakpoints={{
              300: {
                slidesPerView: 1.1,
                width: 300,
              },
              768: {
                slidesPerView: 2,
                width: 768,
              },
              1300: {
                slidesPerView: 2,
                width: 1300,
              },
            }}
          >
            <SwiperSlide className="">
              <div className=" w-full lg:w-[480px] h-[370px] lg:h-auto shadow-lg  bg-white rounded-xl p-6">
                <p className="text-m-black pb-3">APPLE SPECIALIST</p>
                <h1 className="text-xl lg:text-2xl font-semibold w-full text-m-black pb-3">
                  Shop one on one with a Specialist. Online or in a store
                </h1>

                <img
                  className="h-[180px] lg:h-[350px] w-full object-cover"
                  src={Doc.src}
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex  flex-col gap-4">
                <div className="bg-white p-10 rounded-xl h-1/2 w-full lg:w-[450px]">
                  <h1 className="text-m-black font-semibold text-lg lg:text-xl w-full lg:w-[300px]">
                    Get to know your new device with a free Personal Session
                  </h1>
                </div>
                <div className="bg-gradient-to-br rounded-xl lg:w-[450px] justify-self-stretch p-10 lg:py-4 flex items-center font-semibold from-blue-200  to-red-200 h-1/2">
                  <h1 className="text-m-black text-lg lg:text-xl w-[300px]">
                    Get expert service and support at the Genius Bar.
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Accessories */}
      <div className="flex flex-col mt-20 px-4 lg:pl-96">
        <h1 className="text-ml-black text-xl lg:text-3xl pb-5 font-semibold">
          Accessories.
          <span className="text-ml3-gray ">
            Essentials that pair perfectly with your favorite devices.
          </span>
        </h1>
        <div className="flex gap-4">
          <Swiper
            spaceBetween={20}
            grabCursor={true}
            breakpoints={{
              300: {
                slidesPerView: 1.1,
                width: 300,
              },
              768: {
                slidesPerView: 2,
                width: 768,
              },

              1300: {
                slidesPerView: 3,
                width: 1300,
              },
            }}
          >
            <SwiperSlide>
              <Accessories />
            </SwiperSlide>
            <SwiperSlide>
              <Accessories />
            </SwiperSlide>
            <SwiperSlide>
              <Accessories />
            </SwiperSlide>
            <SwiperSlide>
              <Accessories />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* loud and clear  */}
      <div className="flex flex-col mt-20 px-4 lg:pl-96">
        <h1 className="text-ml-black text-xl lg:text-3xl pb-5 font-semibold">
          Loud and clear.
          <span className="text-ml3-gray ">
            Unparalleled choices for rich, high-quality sound.
          </span>
        </h1>
        <div className="flex gap-4">
          <Swiper
            spaceBetween={20}
            grabCursor={true}
            breakpoints={{
              300: {
                slidesPerView: 1.1,
                width: 300,
              },
              768: {
                slidesPerView: 2,
                width: 768,
              },

              1300: {
                slidesPerView: 3,
                width: 1300,
              },
            }}
          >
            <SwiperSlide>
              <Accessories />
            </SwiperSlide>
            <SwiperSlide>
              <Accessories />
            </SwiperSlide>
            <SwiperSlide>
              <Accessories />
            </SwiperSlide>
            <SwiperSlide>
              <Accessories />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-col mt-20 px-4 lg:pl-96">
        <h1 className="text-ml-black text-xl lg:text-3xl pb-5 font-semibold">
          The Apple experience.
          <span className="text-ml3-gray ">
            Do even more with Apple products and services.
          </span>
        </h1>
        <div className="flex gap-4">
          <Swiper
            spaceBetween={20}
            grabCursor={true}
            breakpoints={{
              300: {
                slidesPerView: 1.1,
                width: 300,
              },
              768: {
                slidesPerView: 2,
                width: 768,
              },

              1300: {
                slidesPerView: 3,
                width: 1300,
              },
            }}
          >
            <SwiperSlide>
              <ExperienceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExperienceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExperienceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ExperienceCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-col mt-20 px-4 lg:pl-96">
        <h1 className="text-ml-black text-xl lg:text-3xl pb-5 font-semibold">
          Special stores.
          <span className="text-ml3-gray ">
            Exclusive savings for businesses, school, and more.
          </span>
        </h1>
        <div className="flex gap-4">
          <Swiper
            spaceBetween={20}
            grabCursor={true}
            breakpoints={{
              300: {
                slidesPerView: 1.1,
                width: 300,
              },
              768: {
                slidesPerView: 2,
                width: 768,
              },

              1300: {
                slidesPerView: 3,
                width: 1300,
              },
            }}
          >
            <SwiperSlide>
              <EducationCard />
            </SwiperSlide>
            <SwiperSlide>
              <EducationCard />
            </SwiperSlide>
            <SwiperSlide>
              <EducationCard />
            </SwiperSlide>
            <SwiperSlide>
              <EducationCard />
            </SwiperSlide>
            <SwiperSlide>
              <EducationCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Store;
