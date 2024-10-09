import { createSlice } from "@reduxjs/toolkit";
import { getClientSecret } from "../../Thunks/paymentThunks/getClientSecret";
const initialState = { status: "idle", error: "", clientSecret: "" };
const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getClientSecret.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.clientSecret = "";
      })
      .addCase(getClientSecret.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.clientSecret = action.payload;
      })
      .addCase(getClientSecret.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export default paymentSlice.reducer;
