import { useState } from "react";
import { WhatMusical } from "./aboutPages/WhatMusical";
import { WhyMusical } from "./aboutPages/WhyMusical";
import { AboutMarket } from "./aboutPages/AboutMarket";
import { AboutNotes } from "./aboutPages/AboutNotes";
import { AboutCommunity } from "./aboutPages/AboutCommunity";

export const AboutContainer = () => {
  const [selectedAbout, setSelected] = useState("what");

  const handleClick = (about) => {
    setSelected(about);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-24 animate-in slide-in-from-left fade-in-100 duration-1000   ">
      <h1 className="transition-all duration-700 text-[3rem] dark:text-white text-black ml-10  ">
        About{" "}
        <span className="text-[3rem] font-semibold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text">
          Musical
        </span>
      </h1>
      <div className="flex flex-col  items-center max-w-[120rem] w-[89%] mt-10  m-auto shadow-lg dark:shadow-xl shadow-black dark:shadow-pink-400 transition-all duration-300  dark:bg-gray-200  bg-gray-900 h-[40rem] ">
        <div className="w-[100%] transition-all duration-300">
          <ul className="flex  gap-20 justify-center mt-10 mb-10 ">
            <li
              className={`cursor-pointer text-2xl  transition-all duration-700  border-gray-900  ${
                selectedAbout === "what"
                  ? "bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text"
                  : "dark:text-black text-white"
              }`}
              onClick={() => handleClick("what")}
            >
              What is Musical?
            </li>
            <li
              className={`cursor-pointer text-2xl  transition-all duration-700 ${
                selectedAbout === "why"
                  ? " bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text"
                  : "dark:text-black text-white"
              }`}
              onClick={() => handleClick("why")}
            >
              Why use Musical?
            </li>
            <li
              className={`cursor-pointer text-2xl transition-all duration-700  ${
                selectedAbout === "marketplace"
                  ? " bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text"
                  : "dark:text-black text-white"
              }`}
              onClick={() => handleClick("marketplace")}
            >
              About Our Marketplace
            </li>
            <li
              className={`cursor-pointer text-2xl  transition-all duration-700  ${
                selectedAbout === "notes"
                  ? " bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text"
                  : "dark:text-black text-white"
              }`}
              onClick={() => handleClick("notes")}
            >
              About Musical Notes
            </li>
            <li
              className={`cursor-pointer text-2xl  transition-all duration-700  ${
                selectedAbout === "community"
                  ? " bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text"
                  : "dark:text-black text-white"
              }`}
              onClick={() => handleClick("community")}
            >
              About Our Community
            </li>
          </ul>
        </div>
        <div className="w-[70%] border-t-2 dark:border-gray-900 border-white">
          {selectedAbout === "what" ? (
            <WhatMusical />
          ) : selectedAbout === "why" ? (
            <WhyMusical />
          ) : selectedAbout === "marketplace" ? (
            <AboutMarket />
          ) : selectedAbout === "notes" ? (
            <AboutNotes />
          ) : (
            <AboutCommunity />
          )}
        </div>
      </div>
    </div>
  );
};
