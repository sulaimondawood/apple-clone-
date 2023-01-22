import Link from "next/link";
import React from "react";

// react icons
import { FaApple } from "react-icons/fa";

const Header = () => {
  return (
    <div className="">
      <Link href="/">
        <FaApple />
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
    </div>
  );
};

export default Header;
