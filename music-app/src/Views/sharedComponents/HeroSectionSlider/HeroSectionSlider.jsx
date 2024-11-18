import React, { useState, useEffect } from "react";
import guitarImage1 from "./assets/GuitarImage.jpg";
import guitarImage2 from "./assets/GuitarImage2.jpg";
import guitarImage3 from "./assets/GuitarImage3.jpg";
import guitarImage4 from "./assets/GuitarImage4.jpg";
import musicalParty from "./assets/musical-party.jpg";
import notes1 from "./assets/Notes.jpg";
import notes2 from "./assets/notes1.jpg";
import notes3 from "./assets/notes2.jpg";
import padrinan1 from "./assets/padrinan.jpg";
import padrinan2 from "./assets/padrinan2.jpg";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const images = [
    guitarImage1,
    guitarImage2,
    guitarImage3,
    guitarImage4,
    musicalParty,
    notes1,
    notes2,
    notes3,
    padrinan1,
    padrinan2,
  ];

  // Auto-play interval (switch images every 6 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden pt-16">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
            currentIndex === index
              ? "transform translate-x-0"
              : currentIndex > index
              ? "transform -translate-x-full"
              : "transform translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      ))}

      {/* Black transparent overlay */}
      <div className="absolute w-full h-full bg-black opacity-60"></div>

      {/* Centered text content */}
      <div className="absolute w-full h-full flex justify-center items-center text-center text-white px-4">
        <div className="z-10">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4 transition-opacity duration-500">
            🧡 Feel the Rhythm, ⚡ Embrace the Vibes!
          </h2>
          <p className="text-lg sm:text-xl opacity-90 transition-opacity duration-500">
            Let the sound 🔥 ignite your passion 🖤, energize your soul 💛, and
            set your creativity free ✨
          </p>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 hidden sm:block"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
        }
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 hidden sm:block"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSlider;
