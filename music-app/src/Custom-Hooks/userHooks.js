import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByID } from "../Redux/Thunks/userThunks/getUserThunk";
export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(getUserByID());
  }, [dispatch]);

  return user;
};
