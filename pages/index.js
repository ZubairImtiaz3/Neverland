import React from "react";

// Components
import Navbar from "../components/Navbar";

// Images
import logo from "../imgs/logoBlack.png";

//Styles
const navBtnStyle = {
  background: "black",
  color: "white",
};

export default function Home() {
  return (
    <>
      <Navbar img={logo} btnStyle={navBtnStyle} />
    </>
  );
}
