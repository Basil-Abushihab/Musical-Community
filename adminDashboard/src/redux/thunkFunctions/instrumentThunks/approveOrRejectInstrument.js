import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const approveOrRejectInstrument = createAsyncThunk(
  "instrument/approveOrRejectInstrument",
  async ({ instrumentID, isApproved }) => {
    console.log(isApproved);
    const response = await axios.put(
      "/api/instruments/approveOrRejectInstrument",
      { instrumentID: instrumentID, isApproved: isApproved }
    );
    return response.data.instrument;
  }
);
