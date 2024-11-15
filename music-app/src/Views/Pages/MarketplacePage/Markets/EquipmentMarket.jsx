import { FilteringSection } from "../../../sharedComponents/FilteringSection/FilteringSection";
import { Typography } from "@material-tailwind/react";
import { EquipmentCards } from "../../../sharedComponents/ProductCards/EquipmentCards";
import { CircularPagination } from "../../../sharedComponents/pagination/pagination";
export const EquipmentMarket = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[87%] max-w-[120rem] mt-20">
      <FilteringSection />

      <div className="flex flex-col w-full mt-20 gap-20">
        <Typography className="text-gray-900 dark:text-gray-200 text-[2.5rem]">
          ### Items Available
        </Typography>
        <div className="grid grid-cols-4 gap-10"></div>
        <CircularPagination itemLength={5}></CircularPagination>
      </div>
    </div>
  );
};
