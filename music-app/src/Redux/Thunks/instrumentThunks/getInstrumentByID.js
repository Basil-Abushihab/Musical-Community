import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const getInstrumentByID = createAsyncThunk(
  "instrument/getInstrumentByID",
  async (instrumentID) => {
    const response = await axios.get(
      `/api/instruments/getInstrumentByID?instrumentID=${instrumentID}`
    );
    return response.data.instrument;
  }
);
