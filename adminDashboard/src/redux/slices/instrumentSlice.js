import { createSlice } from "@reduxjs/toolkit";
import { approveOrRejectInstrument } from "../thunkFunctions/instrumentThunks/approveOrRejectInstrument";
import { getPaginatedInstruments } from "../thunkFunctions/instrumentThunks/getPaginatedInstruments";
const initialState = {
  status: "idle",
  instrument: {},
  error: "",
  instruments: [],
};

const instrumentSlice = createSlice({
  initialState: initialState,
  name: "instrument",
  reducers: {
    setInstrumentPageNumber(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(approveOrRejectInstrument.pending, (state) => {
        state.status = "pending";
        state.instrument = {};
        state.error = "";
      })
      .addCase(approveOrRejectInstrument.fulfilled, (state, action) => {
        state.instrument = action.payload;
        state.status = "fulfilled";
      })
      .addCase(approveOrRejectInstrument.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(getPaginatedInstruments.pending, (state) => {
        state.status = "pending";
        state.instruments = [];
        state.error = "";
      })
      .addCase(getPaginatedInstruments.fulfilled, (state, action) => {
        state.instruments = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getPaginatedInstruments.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export default instrumentSlice.reducer;
export const { setInstrumentPageNumber } = instrumentSlice.actions;
