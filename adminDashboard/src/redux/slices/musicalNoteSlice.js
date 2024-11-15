import { createSlice } from "@reduxjs/toolkit";
import { approveOrRejectMusicalNoteListing } from "../thunkFunctions/musicalNoteThunks/approveOrRejectMusicalNote";
const initialState = { status: "idle", musicalNote: {}, error: "" };
const musicalNoteSlice = createSlice({
  initialState: initialState,
  name: "musicalNote",
  extraReducers: (builder) => {
    builder
      .addCase(approveOrRejectMusicalNoteListing.pending, (state) => {
        state.status = "pending";
        state.musicalNote = {};
        state.error = "";
      })
      .addCase(approveOrRejectMusicalNoteListing.fulfilled, (state, action) => {
        state.musicalNote = action.payload;
        state.status = "fulfilled";
      })
      .addCase(approveOrRejectMusicalNoteListing.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export default musicalNoteSlice.reducer;
