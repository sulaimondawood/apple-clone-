import Img from "../assets/watch2.jpg";

const LatestCard = () => {
  return (
    <div className="w-[400px] shadow-md shadow-gray-500 bg-m-black rounded-xl p-6">
      <p className="text-white pb-3">BLACK UNITY BAND</p>
      <h1 className="text-2xl font-semibold w-full text-m-white pb-3">
        Creativity and community. Woven together.
      </h1>
      <p className="text-m-white ">$49</p>
      <img className="h-[300px] w-[300px] object-cover" src={Img.src} alt="" />
    </div>
  );
};

export default LatestCard;
