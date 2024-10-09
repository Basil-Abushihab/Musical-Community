import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const getAllMusicalNotes = createAsyncThunk(
  "musicalNote/getAllMusicalNotes",
  async () => {
    const response = await axios.get("/api/musicalNotes/getAllMusicalNotes");
    return response.data.musicalNotes;
  }
);
