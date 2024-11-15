import HeroSlider from "../../sharedComponents/HeroSectionSlider/HeroSectionSlider";
import { AboutContainer } from "../../sharedComponents/AboutContainer/About-Container";
import { MarketplaceSlider } from "./MarketPlaceComponent/MarketplaceSlider";
import { SliderNotes } from "./MarketPlaceComponent/MarketplaceSlider-MusicalNotes";
import { useGetAllInstruments } from "../../../Custom-Hooks/instrumentHooks/getAllInstrumentsHook";
import { useGetNotes } from "../../../Custom-Hooks/musicalNotesHooks/getNotesHooks";
import { Spinner } from "@material-tailwind/react";
export const HomePage = () => {
  const instruments = useGetAllInstruments();
  const notes = useGetNotes();
  console.log(notes);
  return (
    <div>
      <HeroSlider />
      <AboutContainer />
      <div className="mt-60"></div>
      {instruments.status === "pending" ? (
        <Spinner />
      ) : (
        <MarketplaceSlider instruments={instruments.instruments} />
      )}
      <div className="mt-60"></div>
      <SliderNotes notes={notes} />
      <div className="mt-60">.</div>
    </div>
  );
};
