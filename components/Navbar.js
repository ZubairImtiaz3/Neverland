import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar({ img, btnStyle }) {
  return (
    <>
      <div className="containerNav">
        <div className="flexParent flex justify-between items-center max-w-[90%] mx-auto h-[4.375rem] space-x-[0.625rem]">
          <Link className="basis-[150px] md:basis-auto" href="/">
            <Image className="w-full" priority src={img} alt="logo" />
          </Link>

          <ul className="md:flex items-center space-x-10 hidden">
            <li className="font-bold text-base">
              <Link href="/">About Us</Link>
            </li>
            <li className="font-bold text-base">
              <Link href="/">Careers</Link>
            </li>
            <li>
              <button
                className="py-2 px-3 font-bold rounded-[10px]"
                style={btnStyle}
              >
                Start earning
              </button>
            </li>
          </ul>

          {/* MOBILESCREENS */}
          <ul className="flex items-center space-x-[0.875rem] md:hidden">
            <button
              className="py-[11px] px-[13px] font-bold rounded-[10px] text-[13px]"
              style={btnStyle}
            >
              Start earning
            </button>

            <div className="space-y-2 py-3 px-2 rounded-[6px] bg-black">
              <div className="w-6 h-[1px] bg-white"></div>
              <div className="w-6 h-[1px] bg-white"></div>
              <div className="w-6 h-[1px] bg-white"></div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
