import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const deleteMusicalNote = createAsyncThunk(
  "musicalNote/deleteMusicalNote",
  async (noteID) => {
    const response = await axios.put(
      "/api/musicalNote/deleteMusicalNote",
      noteID
    );
    return response.data.instrument;
  }
);
