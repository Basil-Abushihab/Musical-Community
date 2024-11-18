import { useDispatch, useSelector } from "react-redux";
import { approveOrRejectMusicalNoteListing } from "../../redux/thunkFunctions/musicalNoteThunks/approveOrRejectMusicalNote";
export const useMusicalNote = (musicalNoteID) => {
  const dispatch = useDispatch();
  const musicalNote = useSelector((state) => state.musicalNote);

  const handleApprove = () => {
    dispatch(
      approveOrRejectMusicalNoteListing({
        noteID: musicalNoteID,
        isApproved: true,
      })
    );
  };

  const handleReject = () => {
    dispatch(
      approveOrRejectMusicalNoteListing({
        noteID: musicalNoteID,
        isApproved: false,
      })
    );
  };
  return { musicalNote: musicalNote, handleApprove, handleReject };
};
