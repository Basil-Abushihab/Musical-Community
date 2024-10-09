import notesImage from "./assets/Notes.jpg";

export const AboutNotes = () => {
  return (
    <div className="flex gap-10 items-center h-[30rem] divide-x-2 animate-in zoom-in duration-1000  ">
      <div className="flex flex-col gap-3">
        <img
          src={notesImage}
          alt=""
          className="w-[100rem] h-[20rem] rounded-lg"
        />
      </div>
      <div className="border-l-2 dark:border-gray-900 border-gray-200 text-gray-200 dark:text-gray-900">
        <div className="ml-10 text-2xl h-[20rem] flex flex-col items-center justify-center">
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
