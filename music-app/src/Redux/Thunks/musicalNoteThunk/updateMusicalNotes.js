import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const updateNoteData = createAsyncThunk(
  "musicalNote/updateNoteData",
  async (updatedData) => {
    const response = await axios.put(
      "/api/musicalNotes/updateMusicalNote",
      updatedData,
      {
        headers: { "Content-Type": "multipart/formdata" },
      }
    );
    return response.data.updatedUser;
  }
);
