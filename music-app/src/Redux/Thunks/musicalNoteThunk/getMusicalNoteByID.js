import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const getMusicalNoteByID = createAsyncThunk(
  "note/getMusicalNoteByID",
  async (noteID) => {
    const response = await axios.get(
      `/api/musicalNotes/getMusicalNoteByID?noteID=${noteID}`
    );
    return response.data.note;
  }
);
