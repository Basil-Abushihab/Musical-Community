import { FilteringSection } from "../../../sharedComponents/FilteringSection/FilteringSection";
import { EquipmentCards } from "../../../sharedComponents/ProductCards/EquipmentCards";
import { CircularPagination } from "../../../sharedComponents/pagination/pagination";

export const EquipmentMarket = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[87%] max-w-[120rem] mt-20">
      <FilteringSection />

      <div className="flex flex-col w-full mt-20 gap-20">
        <div className="grid grid-cols-4 gap-10"></div>

        <div className="flex justify-center  pb-20">
          <CircularPagination itemLength={5} />
        </div>
      </div>
    </div>
  );
};
