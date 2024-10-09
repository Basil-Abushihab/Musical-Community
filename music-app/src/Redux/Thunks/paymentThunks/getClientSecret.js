import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const getClientSecret = createAsyncThunk(
  "payment/getClientSecret",
  async (amount) => {
    const response = await axios.post("/api/payments/makePayment", {
      amount: amount,
    });

    return response.data.paymentIntent;
  }
);
