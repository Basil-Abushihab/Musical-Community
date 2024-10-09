import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";
export const makeMusicalNoteListing = createAsyncThunk(
  "musicalNote",
  async (musicalData) => {
    const response = await axios.post(
      "/api/musicalNotes/makeMusicalNoteListing",
      musicalData,
      { headers: { "Content-Type": "multipart/formdata" } }
    );
    return response.data.instrument;
  }
);
