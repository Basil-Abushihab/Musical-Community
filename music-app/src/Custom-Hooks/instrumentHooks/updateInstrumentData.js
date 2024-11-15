import { useDispatch } from "react-redux";
import { updateInstrumentData } from "../../Redux/Thunks/instrumentThunks/updateInstrumentData";

export const useUpdateInstrumentData = (formData) => {
  const dispatch = useDispatch();
  const updateInstrumentDataHandler = (e) => {
    e.preventDefault();
    dispatch(updateInstrumentData(formData));
  };
  return updateInstrumentDataHandler;
};
