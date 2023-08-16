"use client";
import { useState } from "react";
import { BsFillBagHeartFill, BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={`w-full h-[70px]`}>
      <nav
        className={`w-full h-full flex items-center justify-between px-[30px] border-b`}
      >
        <div className="logo">
          <h1>Tech Store</h1>
        </div>
        <div className="menu flex items-center gap-6">
          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-4 py-2 outline-none"
              placeholder="Search Product.."
            />
          </div>
          <div className="icons flex items-center gap-4">
            <BsFillBagHeartFill className="text-xl text-[--primary-black] cursor-pointer" />
            <Link href={`/pages/carts`} className="flex items-center gap-1 cursor-pointer"> 
              <span>Cart({`0`})</span>
              <BsFillCartCheckFill className="text-xl text-[--primary-black] cursor-pointer" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
