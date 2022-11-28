import React from "react";
import Image from "next/image";

function SecondaryHero({ text, textStyle, img, mainText }) {
  return (
    <>
      <div className="containerHero flex items-center justify-center mt-[4.45rem]">
        <div className="content md:space-y-[1.2rem]">
          <span className="font-bold text-xl md:text-2xl uppercase text-white rounded-[2.719rem] bg-[#939fff] text-center px-6 py-1 ml-12 md:ml-0">
            {mainText}
          </span>
          <p
            style={textStyle}
            className="font-bold text-2xl md:text-[2.5rem] leading-[120%] uppercase text-center md:text-left p-4 md:p-0"
          >
            {text}
          </p>
        </div>
        <Image className="hidden lg:block" priority src={img} alt="vector" />
      </div>
    </>
  );
}

export default SecondaryHero;
