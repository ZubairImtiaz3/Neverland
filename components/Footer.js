import React from "react";
import Link from "next/link";
import Image from "next/image";

// IMAGES
import fbLogo from "../imgs/fbLogo.png";
import twitterLogo from "../imgs/twitterLogo.png";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerParent flex justify-center gap-10 flex-wrap lg:justify-between items-center max-w-[90%] mx-auto lg:h-24 py-6">
          <ul className="flex items-center gap-10 flex-col sm:flex-row w-full sm:w-auto">
            <li className="font-bold text-base">
              <Link href="/">About Us</Link>
            </li>
            <li className="font-bold text-base">
              <Link href="/">Careers</Link>
            </li>
          </ul>
          <ul className="flex items-center gap-10 flex-col sm:flex-row w-full sm:w-auto">
            <li className="font-light text-base underline">
              <Link href="/">Terms and conditions</Link>
            </li>
            <li className="font-light text-base underline">
              <Link href="/">Privacy policy</Link>
            </li>
          </ul>
          <ul className="flex items-center space-x-6">
            <h3 className="font-bold text-base">Our Social Media:</h3>
            <li>
              <Link href="/">
                <Image priority src={fbLogo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image priority src={twitterLogo} alt="logo" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
