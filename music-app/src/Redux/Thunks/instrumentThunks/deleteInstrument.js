import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const deleteInstrument = createAsyncThunk(
  "instrument/deleteInstrument",
  async (instrumentID) => {
    const response = await axios.put(
      "/api/instrument/deleteInstrument",
      instrumentID
    );
    return response.data.instrument;
  }
);
