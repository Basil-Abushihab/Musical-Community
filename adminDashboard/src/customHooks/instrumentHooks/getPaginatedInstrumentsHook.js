import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPaginatedInstruments } from "../../redux/thunkFunctions/instrumentThunks/getPaginatedInstruments";
export const useGetPaginatedInstruments = (page) => {
  const dispatch = useDispatch();
  const instrument = useSelector((state) => state.instrument);
  useEffect(() => {
    dispatch(getPaginatedInstruments(page));
  }, [page, dispatch]);
  return { instruments: instrument.instruments };
};
