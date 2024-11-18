export const WhyMusical = () => {
  return (
    <div className="flex gap-10 items-center h-[30rem] sm:h-[35rem] md:h-[40rem] divide-x-2 animate-in zoom-in duration-1000">
      {/* Left Column: Title */}
      <div className="flex flex-col gap-3">
        <span className="text-gray-600 dark:text-black text-[2.5rem] sm:text-3xl font-medium">
          Why{" "}
        </span>
        <span className="text-[3rem] sm:text-4xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
          Musical
        </span>
      </div>

      {/* Right Column: Description */}
      <div className="border-l-2 border-gray-200 dark:border-black text-gray-800 dark:text-black">
        <div className="ml-10 text-xl sm:text-2xl md:text-3xl h-[20rem] flex items-center">
          Musical stands out as the ultimate platform for music enthusiasts,
          creators, and businesses, offering a host of features and benefits
          that make it the go-to choice for anyone passionate about music.
        </div>
      </div>
    </div>
  );
};
