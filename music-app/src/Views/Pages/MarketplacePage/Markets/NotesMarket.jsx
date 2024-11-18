import { FilteringSection } from "../../../sharedComponents/FilteringSection/FilteringSection";
import { Typography } from "@material-tailwind/react";
import { NotesCards } from "../../../sharedComponents/ProductCards/MusicalNotesCards";
import { CircularPagination } from "../../../sharedComponents/pagination/pagination";

export const NotesMarket = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[87%] max-w-[120rem] mt-20">
      <FilteringSection />

      <div className="flex flex-col w-full mt-20 gap-20">
        <div className="grid grid-cols-3 gap-10 gap-x-10"></div>

        <div className="flex justify-center pb-20">
          <CircularPagination itemLength={5} />
        </div>
      </div>
    </div>
  );
};
