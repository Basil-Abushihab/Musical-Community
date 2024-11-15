import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const getPaginatedNotes = createAsyncThunk(
  "musicalNote/getPaginatedNotes",
  async (page) => {
    const response = await axios.get(
      `/api/musicalNotes/getPaginatedMusicalNotes?page=${page}`
    );
    return response.data.musicalNotes;
  }
);
