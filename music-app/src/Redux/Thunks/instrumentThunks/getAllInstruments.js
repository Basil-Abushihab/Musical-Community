import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const getAllInstruments = createAsyncThunk(
  "instruments/getAllInstruments",
  async () => {
    const response = await axios.get("/api/instruments/getAllInstruments");
    return response.data.instruments;
  }
);
