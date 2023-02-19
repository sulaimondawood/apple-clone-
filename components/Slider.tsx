import React from "react";
import Image from "next/image";

import Img from "../assets/slide.jpg";
import Img2 from "../assets/slide2.jpg";
import Img3 from "../assets/slide3.jpg";
import Img4 from "../assets/slide4.jpg";
import Img5 from "../assets/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className=" w-full mt-4">
      <Swiper
        className="w-screen"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="relative w-[90%]  object-center h-[500px]">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={Img.src}
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[90%] object-center  h-[500px]">
            <Image
              fill
              src={Img2.src}
              alt="img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[90%] object-center   h-[500px]">
            <Image
              fill
              src={Img3.src}
              alt="img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[90%] object-center   h-[500px]">
            <Image
              fill
              src={Img4.src}
              alt="img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
