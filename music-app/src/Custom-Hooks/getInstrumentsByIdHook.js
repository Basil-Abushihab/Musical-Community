import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInstrumentByID } from "../Redux/Thunks/instrumentThunks/getInstrumentByID";
export const useGetInstrumentByID = (instrumentID) => {
  const dispatch = useDispatch();
  const instrument = useSelector((state) => state.instrument);

  useEffect(() => {
    dispatch(getInstrumentByID(instrumentID));
  }, [dispatch, instrumentID]);
  return instrument;
};
