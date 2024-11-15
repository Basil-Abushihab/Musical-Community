import { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
export const useGetUserCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getCount = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/users/getDocumentCount"
      );
      console.log(response.data);
      setCount(Math.ceil(response.data.userCount / 10));
    };
    getCount();
  }, []);

  return count;
};
