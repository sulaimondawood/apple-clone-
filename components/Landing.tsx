import Link from "next/link";
import React from "react";
import Hero from "./Hero";
import Logo from "../assets/clocklogo.png";

function Landing() {
  return (
    <section>
      <Hero />
      <div className="flex flex-col items-center gap-4 ">
        <div className="mbp">
          <h1 className=" text-m-white text-5xl font-semibold pt-28 text-center">
            MacBook Pro
          </h1>
          <h2 className="text-2xl leading-[50px] text-center text-m-white ">
            Supercharged by M2 Pro and M2 Max.
          </h2>
          <p className="text-m-gray leading-10 text-center text-lg">
            Available starting 1.24
          </p>
          <div className="flex text-blue-500 text-lg justify-center gap-10 items-center ">
            <Link href="">Learn more</Link>
            <Link href="/order">Order now</Link>
          </div>
        </div>
        <div className="bg-macmini3 w-[100%] bg-center h-d-height3 ">
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
        <div className="grid w-full gap-4 grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}

export default Landing;
