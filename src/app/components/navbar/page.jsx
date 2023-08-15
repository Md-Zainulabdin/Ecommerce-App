'use client'
import { useState } from "react";
import { BsFillBagHeartFill, BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {

    const [search, setSearch] = useState('')

    return (
        <div className={`w-full h-[70px]`}>
            <nav className={`w-full h-full flex items-center justify-between px-[30px] border-b`}>
                <div className="logo">
                    <h1>Tech Store</h1>
                </div>
                <div className="menu flex items-center gap-6">
                    <div className="search">
                        <input type="search" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} className="border px-4 py-2 outline-none" placeholder="Search Product.." />
                    </div>
                    <div className="icons flex items-center gap-4">
                        <BsFillBagHeartFill className="text-xl text-[--primary-black] cursor-pointer" />
                        <BsFillCartCheckFill className="text-xl text-[--primary-black] cursor-pointer" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;