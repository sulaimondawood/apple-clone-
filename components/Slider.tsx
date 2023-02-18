import React from "react";
import Image from "next/image";

import Img from "../assets/img.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div className="bg-white  w-full mt-4">
      <Swiper
        draggable={true}
        autoplay={true}
        spaceBetween={1}
        slidesPerView={1.1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative w-3/4 object-center  object-contain h-[500px]">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={Img.src}
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-3/4 object-center  object-contain h-[500px]">
            <Image fill src={Img2.src} alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-3/4 object-center  object-contain h-[500px]">
            <Image fill src={Img3.src} alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-3/4 object-center  object-contain h-[500px]">
            <Image fill src={Img4.src} alt="img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
