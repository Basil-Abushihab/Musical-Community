import { useDispatch } from "react-redux";
import { updateNoteData } from "../../Redux/Thunks/musicalNoteThunk/updateMusicalNotes";

export const useUpdateMusicalNote = (formData) => {
  const dispatch = useDispatch();
  const updateMusicalNoteHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteData(formData));
  };
  return updateMusicalNoteHandler;
};
