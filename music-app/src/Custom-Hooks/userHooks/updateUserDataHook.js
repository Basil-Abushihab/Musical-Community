import { useDispatch } from "react-redux";
import { updateUserData } from "../../Redux/Thunks/userThunks/updateUserData";

export const useUpdateUserData = (formData) => {
  const dispatch = useDispatch();
  const updateUserDataHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserData(formData));
  };

  return updateUserDataHandler;
};
