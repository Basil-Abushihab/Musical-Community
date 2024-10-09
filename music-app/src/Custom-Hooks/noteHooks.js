import { useDispatch, useSelector } from "react-redux";
import { makeMusicalNoteListing } from "../Redux/Thunks/musicalNoteThunk/makeMusicalNoteThunk";
export const useNote = (formData) => {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.musicalNote);

  const makeMusicalNoteHandler = (e) => {
    e.preventDefault();
    dispatch(makeMusicalNoteListing(formData));
  };

  return { makeMusicalNoteHandler, note };
};
