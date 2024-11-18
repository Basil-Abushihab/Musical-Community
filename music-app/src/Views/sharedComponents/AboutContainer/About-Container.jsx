import { WhatMusical } from "./aboutPages/WhatMusical";
import { WhyMusical } from "./aboutPages/WhyMusical";
import { AboutMarket } from "./aboutPages/AboutMarket";
import { AboutNotes } from "./aboutPages/AboutNotes";
import { useState, useRef, useEffect } from "react";

export const AboutContainer = () => {
  const [selectedAbout, setSelected] = useState("what");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef([]);

  const tabs = [
    { id: "what", label: "What is Musical?" },
    { id: "why", label: "Why use Musical?" },
    { id: "marketplace", label: "About Marketplace" },
    { id: "notes", label: "About Notes" },
  ];

  useEffect(() => {
    const activeTab = tabsRef.current.find((tab) => tab.id === selectedAbout);

    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab.element;
      setUnderlineStyle({
        width: `${offsetWidth}px`,
        left: `${offsetLeft}px`,
      });
    }
  }, [selectedAbout]);

  const handleClick = (about) => {
    setSelected(about);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16 animate-in slide-in-from-left fade-in-100 duration-1000">
      {/* Heading */}
      <h1 className="transition-all duration-700 text-3xl sm:text-4xl lg:text-5xl text-orange-600 mb-8 text-center">
        About{" "}
        <span className="font-bold bg-gradient-to-r from-orange-400 via-orange-200 to-orange-500 text-transparent bg-clip-text pr-3 font-[Pacifico]">
          Musical
        </span>
      </h1>

      {/* Main Section */}
      <div className="flex flex-col items-center w-[95%] sm:w-[85%] lg:w-[75%] xl:w-[70%] mt-10 bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">
        {/* Navigation Tabs */}
        <div className="relative w-full border-b border-gray-300">
          <ul className="relative flex flex-wrap justify-center gap-6 sm:gap-10 py-5">
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                id={tab.id}
                ref={(el) =>
                  (tabsRef.current[index] = { id: tab.id, element: el })
                }
                className={`cursor-pointer text-base sm:text-lg lg:text-xl font-medium transition-all duration-700 hover:text-orange-500 focus:text-orange-500 ${
                  selectedAbout === tab.id
                    ? "text-orange-500"
                    : "text-orange-600"
                }`}
                onClick={() => handleClick(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          {/* Underline */}
          <div
            className={`absolute bottom-0 h-1 bg-orange-500 transition-all duration-500 ease-in-out`}
            style={underlineStyle}
          />
        </div>

        {/* Content Section */}
        <div className="w-full px-8 py-4 sm:px-10 sm:py-6">
          {selectedAbout === "what" ? (
            <WhatMusical />
          ) : selectedAbout === "why" ? (
            <WhyMusical />
          ) : selectedAbout === "marketplace" ? (
            <AboutMarket />
          ) : (
            <AboutNotes />
          )}
        </div>
      </div>
    </div>
  );
};
