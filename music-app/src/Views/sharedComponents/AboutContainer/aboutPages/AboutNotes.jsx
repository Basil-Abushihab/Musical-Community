import notesImage from "./assets/Notes.jpg";

export const AboutNotes = () => {
  return (
    <div className="flex gap-10 items-center h-[30rem] sm:h-[35rem] md:h-[40rem] divide-x-2 animate-in zoom-in duration-1000">
      {/* Left Column: Image */}
      <div className="flex flex-col gap-3">
        <img
          src={notesImage}
          alt="Notes"
          className="w-[100%] sm:w-[90%] lg:w-[80%] h-[20rem] rounded-lg object-cover"
        />
      </div>

      {/* Right Column: Description */}
      <div className="border-l-2 border-gray-200 dark:border-black text-gray-800 dark:text-black">
        <div className="ml-10 text-xl sm:text-2xl md:text-3xl h-[20rem] flex flex-col items-center justify-center">
          Musical's Notes feature is an innovative tool designed to help
          musicians and composers organize their work, collaborate with others,
          and keep track of their musical ideas. Whether you're jotting down
          chords or writing full compositions, Notes is the perfect solution.
        </div>
      </div>
    </div>
  );
};
