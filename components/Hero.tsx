import React from "react";
import { BsPlayCircle } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="bg-m-black  min-w-screen pb-4 lg:pb-0">
      <h1
        className="text-3xl px-4 lg:px-0 pt-24 lg:pt-20 w-full
       lg:w-[768px] text-center mx-auto  text-m-white font-semibold lg:text-5xl"
      >
        Introducing the new MacBook Pro and Mac mini.
      </h1>
      <button className="border text-center  border-m-white rounded-full py-2 px-6 mx-auto mt-10 flex  items-center gap-2 text-lg text-m-white">
        Watch the announcement
        <span>
          <BsPlayCircle />
        </span>
      </button>
    </section>
  );
};
// const Hero = () => {
//   return (
//     <section className="bg-m-black  min-w-full pb-4 lg:pb-0">
//       <h1
//         className="text-3xl  pt-24 lg:pt-20 w-96
//        lg:w-[768px] text-center mx-auto  text-m-white font-semibold lg:text-5xl"
//       >
//         Introducing the new MacBook Pro and Mac mini.
//       </h1>
//       <button className="border text-center  border-m-white rounded-full py-2 px-6 mx-auto mt-10 flex  items-center gap-2 text-lg text-m-white">
//         Watch the announcement
//         <span>
//           <BsPlayCircle />
//         </span>
//       </button>
//     </section>
//   );
// };

export default Hero;
