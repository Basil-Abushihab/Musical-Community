import React from "react";
import { Carousel } from "@material-tailwind/react";
import guitarImage from "./assets/GuitarImage.jpg";
import notesImage from "./assets/Notes.jpg";
const HeroSlider = () => {
  const guitarStyle = {
    "background-image": "url(" + guitarImage + ")",
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover",
  };
  const notesStyle = {
    "background-image": "url(" + notesImage + ")",
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover",
  };
  return (
    <div className="flex justify-center items-center pt-20 ">
      <Carousel
        className=" h-[45rem]  shadow-xl transition-color duration-700 dark:shadow-pink-400"
        transition={{ duration: 2 }}
        autoplay={true}
        loop={true}
      >
        <div className="h-full w-full object-cover" style={guitarStyle}></div>
        <div className="h-full w-full object-cover" style={notesStyle}></div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
