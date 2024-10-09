import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicalNoteByID } from "../Redux/Thunks/musicalNoteThunk/getMusicalNoteByID";
export const useGetNoteByID = (noteID) => {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.musicalNote);

  useEffect(() => {
    dispatch(getMusicalNoteByID(noteID));
  }, [dispatch, noteID]);
  return note;
};
