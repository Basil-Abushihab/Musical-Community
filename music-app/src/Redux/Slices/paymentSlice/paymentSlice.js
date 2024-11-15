import { createSlice } from "@reduxjs/toolkit";
import { getClientSecret } from "../../Thunks/paymentThunks/getClientSecret";
import { confirmPayment } from "../../Thunks/paymentThunks/confirmPaymentThunk";
const initialState = {
  status: "idle",
  error: "",
  clientSecret: "",
  amount: 0,
  order: {},
  stage: "checkout",
};
const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {
    setPaymentAmount(state, action) {
      state.amount = action.payload;
    },
  },
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
        state.stage = "payment";
      })
      .addCase(getClientSecret.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      })
      .addCase(confirmPayment.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.order = {};
      })
      .addCase(confirmPayment.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.order = action.payload;
        state.stage = "completed";
      })
      .addCase(confirmPayment.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;

export const { setPaymentAmount } = paymentSlice.actions;
