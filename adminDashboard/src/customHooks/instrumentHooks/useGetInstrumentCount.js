import { useState, useEffect } from "react";
import axios from "../../../utils/axiosInstance";
export const useGetInstrumentCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getNoteCount = async () => {
      const response = await axios.get("/api/instruments/getInstrumentCount");
      setCount(response.data.instrumentCount);
    };
    getNoteCount();
  }, []);
  return Math.ceil(count / 10);
};
