import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPaginatedUsers } from "../../redux/thunkFunctions/userThunks/userThunks";
export const useGetAllUsers = (page) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaginatedUsers(page));
  }, [dispatch, page]);
  return;
};
