import { useDispatch, useSelector } from "react-redux";
import { approveOrRejectMusicalNoteListing } from "../../redux/thunkFunctions/musicalNoteThunks/approveOrRejectMusicalNote";
export const useMusicalNote = (musicalNoteID, isApproved) => {
  const dispatch = useDispatch();
  const musicalNote = useSelector((state) => state.musicalNote);

  const handleApprove = () => {
    dispatch(approveOrRejectMusicalNoteListing(musicalNoteID, isApproved));
  };
  return { musicalNote: musicalNote, handleApprove };
};
