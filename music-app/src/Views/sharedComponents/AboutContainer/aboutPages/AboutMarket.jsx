import guitarImage from "./assets/GuitarImage.jpg";

export const AboutMarket = () => {
  return (
    <div className="flex gap-10 items-center h-[30rem] sm:h-[35rem] md:h-[40rem] divide-x-2 animate-in zoom-in duration-1000">
      {/* Left Column: Image */}
      <div className="flex flex-col gap-3">
        <img
          src={guitarImage}
          alt="Guitar"
          className="w-[100%] sm:w-[90%] lg:w-[80%] h-[20rem] rounded-lg object-cover"
        />
      </div>

      {/* Right Column: Description */}
      <div className="border-l-2 border-gray-200 dark:border-black text-gray-800 dark:text-black">
        <div className="ml-10 text-xl sm:text-2xl md:text-3xl h-[20rem] flex flex-col items-center justify-center">
          Musical's Marketplace is a dynamic and inclusive platform that
          connects sellers and buyers of musical instruments and equipment.
          Whether you're an individual looking to sell your personal gear or a
          store aiming to reach a broader audience, our marketplace offers the
          perfect solution.
        </div>
      </div>
    </div>
  );
};
