import Link from "next/link";
import React from "react";

// react icons
import { FaApple } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <div className="z-[999999]">
      <div className="hidden nav-blur backdrop-blur-3xl  fixed top-0 w-screen  justify-center space-x-9 py-3 lg:flex">
        <Link href="/">
          <FaApple className="hover:text-ml-gray text-gray-300 text-xl" />
        </Link>
        <Link className="nav-link" href="/store">
          Store
        </Link>
        <Link className="nav-link" href="/store">
          Mac
        </Link>
        <Link className="nav-link" href="/store">
          ipad
        </Link>
        <Link className="nav-link" href="/store">
          iPhone
        </Link>
        <Link className="nav-link" href="/store">
          Watch
        </Link>
        <Link className="nav-link" href="/store">
          Airpods
        </Link>
        <Link className="nav-link" href="/store">
          Tv & Home
        </Link>
        <Link className="nav-link" href="/store">
          Only on Apple
        </Link>
        <Link className="nav-link" href="/store">
          Accesories
        </Link>
        <Link className="nav-link" href="/store">
          Support
        </Link>
        <button className="nav-link">
          <CiSearch className="text-m-gray text-xl hover:text-ml-gray" />
        </button>
        <button>
          <BsBag className="text-m-gray text-lg hover:text-ml-gray" />
        </button>
      </div>

      {/* Mobile? */}
      <div className="nav-blur backdrop-blur-3xl py-5 px-3 lg:hidden  fixed top-0 w-screen flex justify-between items-center">
        <Link href="/">
          <FaApple className="hover:text-ml-gray text-gray-300 text-xl" />
        </Link>
        <div className="flex gap-8 items-center">
          <button className="nav-link">
            <CiSearch className="text-gray-300 text-xl hover:text-ml-gray" />
          </button>
          <button>
            <BsBag className="text-gray-300 text-lg hover:text-ml-gray" />
          </button>
          <div className="text-gray-300 text-lg hover:text-ml-gray">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
