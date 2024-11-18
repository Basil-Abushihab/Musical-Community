import { Typography, Switch } from "@material-tailwind/react";
import { useState } from "react";
import { EquipmentMarket } from "./Markets/EquipmentMarket";
import { NotesMarket } from "./Markets/NotesMarket";

export const Marketplace = () => {
  const [marketplaceType, setType] = useState("Equipment");

  const switchAudio = new Audio("/sound-file.mp3");

  return (
    <div className="flex flex-col justify-center items-center pt-40">
      <div className="flex justify-between w-[87%] max-w-[120rem]">
        <div>
          <Typography className="text-[2.5rem] text-gray-900 dark:text-gray-200 transition-all duration-700">
            <span className="text-[3rem] bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-transparent bg-clip-text pr-3 font-[Pacifico]">
              Musical
            </span>
            {" " + marketplaceType}
          </Typography>
        </div>
        <div className="flex gap-4 items-center text-[1.5rem] text-gray-900 dark:text-gray-200">
          <Switch
            color="orange"
            checked={marketplaceType === "Notes"}
            onChange={() => {
              switchAudio.play();
              setType(marketplaceType === "Equipment" ? "Notes" : "Equipment");
            }}
          />
          Switch to {marketplaceType === "Equipment" ? "Notes" : "Equipment"}{" "}
          Market
        </div>
      </div>
      {marketplaceType === "Equipment" ? <EquipmentMarket /> : <NotesMarket />}
    </div>
  );
};
