import { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { getPaginatedUsers } from "../../redux/thunkFunctions/userThunks/userThunks";
export const useGetUserCount = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getCount = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/users/getDocumentCount"
      );

      setCount(Math.ceil(response.data.userCount / 10));
    };
    getCount();
  }, [dispatch]);
  return count;
};
