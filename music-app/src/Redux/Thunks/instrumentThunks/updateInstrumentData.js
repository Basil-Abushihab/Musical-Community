import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const updateInstrumentData = createAsyncThunk(
  "instrument/updateInstrumentData",
  async (updatedData) => {
    const response = await axios.put(
      "/api/instruments//updateInsturmentData",
      updatedData,
      {
        headers: { "Content-Type": "multipart/formdata" },
      }
    );
    return response.data.updatedInstrument;
  }
);
