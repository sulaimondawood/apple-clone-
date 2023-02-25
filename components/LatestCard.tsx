import Img from "../assets/watch2.jpg";
import { SwiperSlide } from "swiper/react";
const LatestCard = () => {
  return (
    <div className="w-screen lg:w-[400px] h-[350px] lg:h-[450px] shadow-md shadow-gray-500 bg-m-black rounded-xl p-6">
      <p className="text-white pb-3">BLACK UNITY BAND</p>
      <h1 className="text-xl  lg:text-2xl font-semibold w-[100%]  text-m-white pb-3">
        Creativity and community. Woven together.
      </h1>
      <p className="text-m-white ">$49</p>
      <img
        className="h-[200px] lg:h-[300px] w-[300px] object-cover"
        src={Img.src}
        alt=""
      />
    </div>
  );
};

export default LatestCard;
