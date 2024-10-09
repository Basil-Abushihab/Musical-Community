export const WhyMusical = () => {
  return (
    <div className="flex gap-10 items-center h-[30rem] divide-x-2 animate-in zoom-in duration-1000  ">
      <div className="flex flex-col gap-3">
        <span className="dark:text-gray-900 text-gray-200  text-[2.5rem] ">Why </span>
        <span className="text-[3rem] font-semibold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-500 text-transparent bg-clip-text">
          Musical
        </span>
      </div>
      <div className="border-l-2 dark:border-gray-900 border-gray-200 text-gray-200 dark:text-gray-900">
        <div className="ml-10 text-2xl h-[20rem] flex items-center">
          Musical stands out as the ultimate platform for music enthusiasts,
          creators, and businesses, offering a host of features and benefits
          that make it the go-to choice for anyone passionate about music.
        </div>
      </div>
    </div>
  );
};
