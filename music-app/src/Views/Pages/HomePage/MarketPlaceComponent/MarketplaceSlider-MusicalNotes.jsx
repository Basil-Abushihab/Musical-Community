import { Carousel } from "@material-tailwind/react";
import { IconButton, Typography } from "@material-tailwind/react";
import arrowIcon from "../assets/RightArrow.gif";
import { NotesCards } from "../../../sharedComponents/ProductCards/MusicalNotesCards";
export const SliderNotes = ({ notes }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 animate-in zoom-in duration-1000 ">
      <div className="flex items-center justify-between w-[89%] ">
        <div className="flex flex-col mb-4">
          <Typography className="text-[2.5rem] text-gray-900 dark:text-gray-200">
            <span className="text-[3rem] bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text">
              Musical
            </span>{" "}
            Marketplace
          </Typography>
          <Typography className="text-[2rem] text-gray-900 dark:text-gray-200">
            Explore The Musical Notes Marketplace
          </Typography>
        </div>
        <div className="flex items-center justify-center gap-5 cursor-pointer border-2 border-black w-[10%] rounded-md text-gray-900  bg-white">
          View More
          <img src={arrowIcon} alt="" className="w-[2rem] h-[2rem]  " />
        </div>
      </div>
      <Carousel
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-2 -translate-y-2/4"
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
            className="!absolute top-2/4 !right-2 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6  dark:text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        className=" h-[20rem] max-w-[120rem] w-[89%] shadow-lg transition-color duration-700 bg-gray-900 dark:bg-gray-200 shadow-gray-900 dark:shadow-pink-400 dark:shadow-xl"
        transition={{ duration: 2 }}
        autoplay={true}
        loop={true}
      >
        <div className="flex justify-evenly items-center mt-5 h-[17rem] ">
          {notes.notes.map((note, index) =>
            index < 3 ? (
              <NotesCards isHomePage={true} note={note} key={index} />
            ) : (
              ""
            )
          )}
        </div>
        <div className="flex justify-evenly items-center mt-5 h-[17rem] ">
          {notes.notes.map((note, index) =>
            index < 6 && index >= 3 ? (
              <NotesCards isHomePage={true} note={note} key={index} />
            ) : (
              ""
            )
          )}
        </div>
      </Carousel>
    </div>
  );
};
