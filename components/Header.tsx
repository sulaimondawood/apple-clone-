import Link from "next/link";
import React from "react";

// react icons
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <div className="hidden justify-center space-x-9 py-4 lg:flex">
      <Link href="/">
        <FaApple className="hover:text-ml-gray text-m-gray text-xl" />
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
  );
};

export default Header;
