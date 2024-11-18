import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPaginatedUsers } from "../../redux/thunkFunctions/userThunks/userThunks";
export const useGetPaginatedUsers = (page) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getPaginatedUsers(page));
  }, [page, dispatch]);
  return { users: user.users };
};
