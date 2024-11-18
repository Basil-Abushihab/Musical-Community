import { Carousel } from "@material-tailwind/react";
import { IconButton, Typography } from "@material-tailwind/react";
import arrowIcon from "../assets/RightArrow.gif";
import { NotesCards } from "../../../sharedComponents/ProductCards/MusicalNotesCards";
import { Link } from "react-router-dom";

export const SliderNotes = ({ notes }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 animate-in slide-in-from-left fade-in-100 duration-1000">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <Typography className="transition-all duration-700 text-3xl sm:text-4xl lg:text-5xl text-orange-600 mb-8 text-center">
          Marketplace{" "}
          <span className="font-bold bg-gradient-to-r from-orange-400 via-orange-200 to-orange-500 text-transparent bg-clip-text pr-3 font-[Pacifico]">
            Musical
          </span>
        </Typography>
        <Typography className="text-xl text-gray-900 dark:text-gray-200 text-center mb-6">
          Explore The{" "}
          <span className="text-orange-600 hover:text-orange-500 transform hover:scale-110 transition-all duration-300 animate-moveNotes">
            Musical Notes
          </span>{" "}
          Marketplace
        </Typography>
      </div>

      {/* Carousel Section */}
      <Carousel
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 dark:text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 dark:text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        className="h-[40rem] max-w-[120rem] w-[89%] shadow-lg transition-color duration-700 bg-gray-900 dark:bg-gray-800 shadow-gray-900 dark:shadow-orange-400 dark:shadow-xl"
        transition={{ duration: 2 }}
        autoplay={true}
        loop={true}
      >
        <div className="flex justify-around items-center mt-5 h-[17rem]">
          {notes.notes.map((note, index) =>
            index < 3 ? (
              <NotesCards isHomePage={true} note={note} key={index} />
            ) : (
              ""
            )
          )}
        </div>

        <div className="flex justify-around items-center mt-5 h-[17rem]">
          {notes.notes.map((note, index) =>
            index < 6 && index >= 3 ? (
              <NotesCards isHomePage={true} note={note} key={index} />
            ) : (
              ""
            )
          )}
        </div>
      </Carousel>

      {/* View More Button */}
      <div className="mt-6">
        <Link to="/Marketplace">
          <button className="flex items-center justify-center gap-2 px-6 py-3 text-lg text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
            View More
            <img
              src={arrowIcon}
              alt="Arrow Icon"
              className="w-[2rem] h-[2rem]"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};
