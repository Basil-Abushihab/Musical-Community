import { useSelector, useDispatch } from "react-redux";
import { updateUserInformation } from "../../redux/thunkFunctions/userThunks/userThunks";
export const useUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const disableOrEnableUser = (userData) => {
    dispatch(
      updateUserInformation({
        isDisabled: !userData.isDisabled,
        _id: userData._id,
      })
    );
  };

  return { disableOrEnableUser, users: users };
};
