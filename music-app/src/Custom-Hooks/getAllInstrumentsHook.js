import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllInstruments } from "../Redux/Thunks/instrumentThunks/getAllInstruments";
export const useGetAllInstruments = () => {
  const dispatch = useDispatch();
  const instruments = useSelector((state) => state.instrument);

  useEffect(() => {
    dispatch(getAllInstruments());
  }, [dispatch]);

  return instruments;
};
