import { createSlice } from "@reduxjs/toolkit";
import { makeMusicalNoteListing } from "../../Thunks/musicalNoteThunk/makeMusicalNoteThunk";
import { getAllMusicalNotes } from "../../Thunks/musicalNoteThunk/getAllMusicalNotes";
import { getMusicalNoteByID } from "../../Thunks/musicalNoteThunk/getMusicalNoteByID";
import { getPaginatedNotes } from "../../Thunks/musicalNoteThunk/getPaginatedMusicalNotes";
import { updateNoteData } from "../../Thunks/musicalNoteThunk/updateMusicalNotes";
import { deleteInstrument } from "../../Thunks/instrumentThunks/deleteInstrument";
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
      })
      .addCase(getPaginatedNotes.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.notes = [];
      })
      .addCase(getPaginatedNotes.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.notes = action.payload;
      })
      .addCase(getPaginatedNotes.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(updateNoteData.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.note = {};
      })
      .addCase(updateNoteData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.note = action.payload;
      })
      .addCase(updateNoteData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(deleteInstrument.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.note = {};
      })
      .addCase(deleteInstrument.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.note = action.payload;
      })
      .addCase(deleteInstrument.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default musicalNoteSlice.reducer;
