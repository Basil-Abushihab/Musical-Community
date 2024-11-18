import axios from "../../../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPaginatedInstruments = createAsyncThunk(
  "instruments/getPaginatedInstruments",
  async (page) => {
    const response = await axios.get(
      `/api/instruments/getPaginatedInstruments?page=${page}`
    );
    return response.data.instruments;
  }
);
