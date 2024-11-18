import axios from "../../../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPaginatedNotes = createAsyncThunk(
  "musicalNotes/getPaginatedNotes",
  async (page) => {
    const response = await axios.get(
      `/api/musicalNotes/getPaginatedMusicalNotes?page=${page}`
    );
    return response.data.musicalNotes;
  }
);
