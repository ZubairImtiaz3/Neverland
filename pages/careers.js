import React from "react";
import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero";

// Images
import logo from "../imgs/logoBlack.png";
import vectorHero from "../imgs/careerVector.png";

//Styles
const navBtnStyle = {
  background: "black",
  color: "white",
};

const heroTextStyle = {
  maxWidth: "43.5rem",
};

//HeroSection
const heroMainText = "Carrers";

const heroText =
  "Combining cutting-edge technology & the talent of industry stars  to create a unique, state-of-the-art product.";

//Accordian
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function careers() {
  return (
    <>
      <Navbar img={logo} btnStyle={navBtnStyle} />

      <SecondaryHero
        text={heroText}
        textStyle={heroTextStyle}
        mainText={heroMainText}
        img={vectorHero}
      />

      <div className="containerCareers max-w-[75%] mx-auto">
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 className="text-[#2A2A2A] font-bold text-2xl md:text-xl">
              Business intelligence analyst
            </h3>
          </AccordionSummary>
          <div className="md:pt-[0.625rem]">
            <AccordionDetails>
              <h3 className="text-[#2A2A2A] mt-2 font-bold text-2xl md:text-xl">
                Objectives of this Role
              </h3>
              <ul className="space-y-6">
                <li>
                  <p className="text-base mt-2 md:text-xl text-[#4c4c4c]">
                    Objectives of this Role Building and setting up new
                    development tools and infrastructure
                  </p>
                </li>
                <li>
                  <p className="text-base mt-2 md:text-xl text-[#4c4c4c]">
                    Understanding the needs of stakeholders and conveying this
                    to developers
                  </p>
                </li>
                <li>
                  <p className="text-base mt-2 md:text-xl text-[#4c4c4c]">
                    Testing and examining code written by others and analyzing
                    results
                  </p>
                </li>
                <li>
                  <p className="text-base mt-2 md:text-xl text-[#4c4c4c]">
                    Ensuring that systems are safe and secure against
                    cybersecurity threats
                  </p>
                </li>
                <li>
                  <p className="text-base mt-2 md:text-xl text-[#4c4c4c]">
                    Identifying technical problems and developing software
                    updates and ‘fixes’
                  </p>
                </li>
                <li>
                  <p className="text-base mt-2 md:text-xl text-[#4c4c4c]">
                    Working with software developers and software engineers to
                    ensure that development follows established processes and
                    works as intended
                  </p>
                </li>
                <li>
                  <p className="text-base mt-2 md:text-xl text-[#4c4c4c]">
                    Planning out projects and being involved in project
                    management decisions
                  </p>
                </li>
              </ul>
              <div className="flex justify-center items-center mt-[4.438rem]">
                <button className="py-4 px-6 bg-black rounded-[10px] text-white">
                  Apply Now
                </button>
              </div>
            </AccordionDetails>
          </div>
        </Accordion>
      </div>
    </>
  );
}

export default careers;
