import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";
export const makeInstrumentListing = createAsyncThunk(
  "instrument/makeInstrumentListing",
  async (instrumentData) => {
    const response = await axios.post(
      "/api/instruments/makeInstrumentListing",
      instrumentData,
      { headers: { "Content-Type": "multipart/formdata" } }
    );
    return response.data.instrument;
  }
);

