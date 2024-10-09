import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMusicalNotes } from "../Redux/Thunks/musicalNoteThunk/getAllMusicalNotes";
export const useGetNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.musicalNote);
  useEffect(() => {
    dispatch(getAllMusicalNotes());
  }, [dispatch]);

  return notes;
};
