import { createSlice } from "@reduxjs/toolkit";
import { approveOrRejectMusicalNoteListing } from "../thunkFunctions/musicalNoteThunks/approveOrRejectMusicalNote";
import { getPaginatedNotes } from "../thunkFunctions/musicalNoteThunks/getPaginatedNotes";
const initialState = {
  status: "idle",
  musicalNote: {},
  error: "",
  musicalNotes: [],
  page: 1,
};
const musicalNoteSlice = createSlice({
  initialState: initialState,
  name: "musicalNote",
  reducers: {
    setNotePageNumber(state, action) {
      state.page = action.payload;
    },
  },
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
      })
      .addCase(getPaginatedNotes.pending, (state) => {
        state.status = "pending";
        state.musicalNotes = [];
        state.error = "";
      })
      .addCase(getPaginatedNotes.fulfilled, (state, action) => {
        state.musicalNotes = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getPaginatedNotes.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export default musicalNoteSlice.reducer;
export const { setNotePageNumber } = musicalNoteSlice.actions;
