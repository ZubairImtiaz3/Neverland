import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero";

// Images
import logo from "../imgs/logoBlack.png";
import vectorHero from "../imgs/vectorAboutUs.png";
import vectorMembers from "../imgs/members.png";
import vectorBag from "../imgs/vectorBag.png";

//HeroSection
const heroMainText = "About us";

const heroText =
  "At Neverlend we have made it our personal goal to futurize traditional finance";

//Styles
const navBtnStyle = {
  background: "black",
  color: "white",
};

const heroTextStyle = {
  maxWidth: "41rem",
};

function aboutUs() {
  return (
    <>
      <Navbar img={logo} btnStyle={navBtnStyle} />

      <SecondaryHero
        text={heroText}
        textStyle={heroTextStyle}
        mainText={heroMainText}
        img={vectorHero}
      />

      <div className="containerAboutUs flex items-center justify-center lg:justify-end gap-14 mt-[5.125rem] md:mt-[13.125rem] mr-2">
        <Image
          className="hidden lg:block"
          priority
          src={vectorMembers}
          alt="vector"
        />
        <p className="text-[#4c4c4c] text-xl p-4 md:p-0 text-center md:text-left md:text-2xl leading-[160%] max-w-[37.375rem]">
          <span className="font-bold text-xl md:text-2xl uppercase px-2 text-white rounded-[2.719rem] bg-[#939fff] text-center">
            Neverlend
          </span>
          &nbsp;was founded with the shortcomings of the current banking
          industry in mind. We believe that banking should be accessible to
          everyone while being fully transparent, competitive and
          customer-centric. Our team is working on transforming the industry by
          providing a better alternative to traditional banking Low yields, high
          account maintenance costs combined with poor customer support make the
          old-fashioned banks unattractive.
          <br />
          <br />
          <span>In the new reality, </span>
          <span className="font-extrabold">
            traditional banks can no longer keep up with the new digital
            revolution.
          </span>
        </p>
      </div>

      <div className="containerCareerAboutUs flex justify-center items-center mt-32 mb-36">
        <div className="contentLeft pt-20 pb-28 md:text-left text-center">
          <h2 className="font-bold text-3xl md:text-6xl text-white max-w-[31.5rem] leading-[120%]">
            Careers at Neverlend
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-[31.5rem] leading-[160%] mt-4 p-4 md:p-0">
            Our company is growing at a rapid pace and is opening doors for
            talented and highly motivated people who will be involved in shaping
            the future of FinTech.
          </p>
          <button className="py-4 px-6 bg-black text-white text-xl md:text-2xl font-medium rounded-[10px] mt-7">
            View openings
          </button>
        </div>
        <Image
          className="hidden lg:block"
          priority
          src={vectorBag}
          alt="vector"
        />
      </div>
    </>
  );
}

export default aboutUs;
