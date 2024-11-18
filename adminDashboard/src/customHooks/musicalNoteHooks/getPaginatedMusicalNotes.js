import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPaginatedNotes } from "../../redux/thunkFunctions/musicalNoteThunks/getPaginatedNotes";
export const useGetPaginatedNotes = (page) => {
  const dispatch = useDispatch();
  const musicalNote = useSelector((state) => state.musicalNote);
  useEffect(() => {
    dispatch(getPaginatedNotes(page));
  }, [page, dispatch]);
  return { musicalNotes: musicalNote.musicalNotes };
};
