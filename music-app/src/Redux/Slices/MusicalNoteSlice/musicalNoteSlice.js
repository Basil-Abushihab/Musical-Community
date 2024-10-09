import { createSlice } from "@reduxjs/toolkit";
import { makeMusicalNoteListing } from "../../Thunks/musicalNoteThunk/makeMusicalNoteThunk";
import { getAllMusicalNotes } from "../../Thunks/musicalNoteThunk/getAllMusicalNotes";
import { getMusicalNoteByID } from "../../Thunks/musicalNoteThunk/getMusicalNoteByID";

const initialState = { status: "idle", error: "", note: {}, notes: [] };

const musicalNoteSlice = createSlice({
  name: "musicalNote",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(makeMusicalNoteListing.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.note = {};
      })
      .addCase(makeMusicalNoteListing.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.note = action.payload;
      })
      .addCase(makeMusicalNoteListing.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getAllMusicalNotes.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.notes = [];
      })
      .addCase(getAllMusicalNotes.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.notes = action.payload;
      })
      .addCase(getAllMusicalNotes.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getMusicalNoteByID.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.note = {};
      })
      .addCase(getMusicalNoteByID.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.note = action.payload;
      })
      .addCase(getMusicalNoteByID.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default musicalNoteSlice.reducer;
