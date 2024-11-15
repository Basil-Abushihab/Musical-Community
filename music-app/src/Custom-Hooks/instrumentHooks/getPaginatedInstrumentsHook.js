import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPaginatedInstruments } from "../../Redux/Thunks/instrumentThunks/getPaginatedInstruments";
export const useGetPaginatedInstruments = (page) => {
  const dispatch = useDispatch();
  const instrument = useSelector((state) => state.instrument);
  useEffect(() => {
    dispatch(getPaginatedInstruments(page));
  }, []);
  return instrument.instruments;
};
