import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const approveOrRejectMusicalNoteListing = createAsyncThunk(
  "musicalNote/approveOrRejectMusicalNoteListing",
  async ({ noteID, isApproved }) => {
    const response = await axios.put(
      "/api/musicalNotes/approveOrRejectMusicalNoteListing",
      { noteID: noteID, isApproved: isApproved }
    );
    return response.data.musicalNote;
  }
);
