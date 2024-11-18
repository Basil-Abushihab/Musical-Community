import { useState, useEffect } from "react";
import axios from "../../../utils/axiosInstance";
export const useGetNoteCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getNoteCount = async () => {
      const response = await axios.get("/api/musicalNotes/getNoteCount");
      setCount(response.data.noteCount);
    };
    getNoteCount();
  }, []);
  return Math.ceil(count / 10);
};
