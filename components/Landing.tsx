import Link from "next/link";
import React from "react";
import Hero from "./Hero";
import Logo from "../assets/clocklogo.png";
import AppleCard from "../assets/applecard.png";
import Image from "next/image";
import Slider from "./Slider";

function Landing() {
  return (
    <section>
      <Hero />
      <div className="flex flex-col items-center gap-4 ">
        <div className="mbp w-full h-[736px]">
          <h1 className=" text-m-white text-3xl lg:text-5xl font-semibold pt-28 text-center">
            MacBook Pro
          </h1>
          <h2 className="text-lg   lg:text-2xl  leading-[50px] text-center text-m-white ">
            Supercharged by M2 Pro and M2 Max.
          </h2>
          <p className="text-m-gray leading-10 text-center text-md lg:text-lg">
            Available starting 1.24
          </p>
          <div className="flex text-blue-500 text-md lg:text-lg justify-center gap-10 items-center ">
            <Link href="">Learn more</Link>
            <Link href="/order">Order now</Link>
          </div>
        </div>
        <div className="bg-macmini3  lg:w-[100%]  bg-center h-d-height3 ">
          <h1 className=" text-m-white text-5xl font-semibold pt-28 text-center">
            Mac mini
          </h1>
          <h2 className="text-2xl leading-[50px] text-center text-m-white ">
            Supercharged by M2 and M2 Pro.
          </h2>
          <p className="text-m-gray leading-10 text-center text-lg">
            Available starting 1.24
          </p>
          <div className="flex text-blue-500 text-lg justify-center gap-10 items-center ">
            <Link href="">Learn more</Link>
            <Link href="/order">Order now</Link>
          </div>
        </div>
        <div className="bg-homepod3 w-full bg-center h-d-height3 ">
          <h1 className=" text-m-white text-5xl font-semibold pt-28 text-center">
            HomePod
          </h1>
          <h2 className="text-2xl leading-[50px] text-center text-m-white ">
            Profound Sound.
          </h2>
          <p className="text-m-gray leading-10 text-center text-lg">
            Available starting 2.3
          </p>
          <div className="flex text-blue-500 text-lg justify-center gap-10 items-center ">
            <Link href="">Learn more</Link>
            <Link href="/order">Order now</Link>
          </div>
        </div>

        {/* galller */}
        <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="bg-watch3 w-full h-[580px] bg-center ">
            <h1 className=" text-m-white text-4xl font-semibold pt-12 text-center max-w-md mx-auto">
              Creativity and community.Woven together.
            </h1>
            <h2 className="text-xl max-w-sm mx-auto text-center  text-m-white ">
              Explore the new Black Unity watch band and match face
            </h2>

            <div className="flex text-blue-500 text-lg  justify-center gap-10 items-center ">
              <Link href="">Learn more</Link>
              <Link href="/order">Buy</Link>
            </div>
          </div>
          <div className="bg-clock3 w-full h-[580px] bg-center ">
            <img
              className="w-36 text-center mx-auto pt-12"
              src={Logo.src}
              alt=""
            />
            <h2 className="text-xl max-w-sm mx-auto text-center  text-m-white ">
              A healthy leap ahead.
            </h2>

            <div className="flex text-blue-500 text-lg  justify-center gap-10 items-center ">
              <Link href="">Learn more</Link>
              <Link href="/order">Buy</Link>
            </div>
          </div>
          <div className="bg-iphone14 w-full h-[580px] bg-center ">
            <h1 className="text-m-white text-4xl font-semibold pt-12 text-center max-w-md mx-auto">
              iPhone 14 Pro
            </h1>
            <h2 className="text-xl max-w-sm mx-auto text-center  text-m-white ">
              Pro Beyond.
            </h2>

            <div className="flex text-blue-500 text-lg  justify-center gap-10 items-center ">
              <Link href="">Learn more</Link>
              <Link href="/order">Buy</Link>
            </div>
          </div>
          <div className="bg-ip w-full h-[580px] bg-center ">
            <h1 className="text-m-black text-4xl font-semibold pt-12 text-center max-w-md mx-auto">
              iPhone 14
            </h1>
            <h2 className="text-xl max-w-sm mx-auto text-center  text-m-black ">
              Big and bigger.
            </h2>
            <p className="text-m-gray leading-10 text-center text-lg">
              Available starting 2.3
            </p>
            <div className="flex text-blue-500 text-lg  justify-center gap-10 items-center ">
              <Link href="">Learn more</Link>
              <Link href="/order">Buy</Link>
            </div>
          </div>
          <div className="bg-promo w-full h-[580px] bg-center ">
            <h1 className="text-white text-4xl font-semibold pt-12 text-center max-w-md mx-auto">
              A gift for every wish.
            </h1>
            <h2 className="text-xl max-w-xs pt-2 mx-auto text-center  text-white ">
              Find something for everyone this Lunar New Year
            </h2>

            <div className="flex text-white text-lg pt-2  justify-center gap-10 items-center ">
              <Link href="">Shop the gift guide</Link>
            </div>
          </div>
          <div className="bg-card w-full h-[580px] bg-center ">
            <div className="relative flex justify-center pt-12 text-center">
              <Image src={AppleCard.src} alt="apple" width={100} height={200} />
              {/* <img className="w-24 text-center" src={AppleCard.src} alt="" /> */}
            </div>
            <h2 className="text-xl max-w-xs pt-2 mx-auto text-center  text-m-black ">
              Get up to 3% Daily Cash back with every purchase
            </h2>
            <div className="flex text-blue-500 text-lg  justify-center gap-10 items-center ">
              <Link href="">Learn more</Link>
              <Link href="/order">Apply now</Link>
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </section>
  );
}

export default Landing;
