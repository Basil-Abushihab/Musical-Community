import { createSlice } from "@reduxjs/toolkit";
import { approveOrRejectInstrument } from "../thunkFunctions/instrumentThunks/approveOrRejectInstrument";
const initialState = { status: "idle", instrument: {}, error: "" };

const instrumentSlice = createSlice({
  initialState: initialState,
  name: "instrument",
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
      });
  },
});

export default instrumentSlice.reducer;
