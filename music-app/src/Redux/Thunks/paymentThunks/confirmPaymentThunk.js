import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const confirmPayment = createAsyncThunk(
  "payment/confirmPayment",
  async (billingInformation) => {
    const response = await axios.post(
      "/api/payments/chargePayment",
      billingInformation,
      { headers: { "Content-Type": "multipart/formdata" } }
    );

    return response.data.order;
  }
);
