import { createSlice } from "@reduxjs/toolkit";
import { makeInstrumentListing } from "../../Thunks/instrumentThunks/makeInstrumentThunk";
import { getAllInstruments } from "../../Thunks/instrumentThunks/getAllInstruments";
import { getInstrumentByID } from "../../Thunks/instrumentThunks/getInstrumentByID";
import { getPaginatedInstruments } from "../../Thunks/instrumentThunks/getPaginatedInstruments";
import { updateInstrumentData } from "../../Thunks/instrumentThunks/updateInstrumentData";
import { deleteInstrument } from "../../Thunks/instrumentThunks/deleteInstrument";
const initialState = {
  status: "idle",
  error: "",
  instrument: {},
  instruments: [],
};

const instrumentSlice = createSlice({
  name: "instrument",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(makeInstrumentListing.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.instrument = {};
      })
      .addCase(makeInstrumentListing.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.instrument = action.payload;
      })
      .addCase(makeInstrumentListing.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getAllInstruments.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.instruments = [];
      })
      .addCase(getAllInstruments.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.instruments = action.payload;
      })
      .addCase(getAllInstruments.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getInstrumentByID.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.instrument = {};
      })
      .addCase(getInstrumentByID.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.instrument = action.payload;
      })
      .addCase(getInstrumentByID.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getPaginatedInstruments.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.instruments = [];
      })
      .addCase(getPaginatedInstruments.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.instruments = action.payload;
      })
      .addCase(getPaginatedInstruments.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(updateInstrumentData.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.instrument = {};
      })
      .addCase(updateInstrumentData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.instrument = action.payload;
      })
      .addCase(updateInstrumentData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(deleteInstrument.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.instrument = {};
      })
      .addCase(deleteInstrument.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.instrument = action.payload;
      })
      .addCase(deleteInstrument.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default instrumentSlice.reducer;
