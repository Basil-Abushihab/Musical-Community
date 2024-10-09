import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";
export const getUserByID = createAsyncThunk("user/getUserByID", async () => {
  const response = await axios.get("/api/users/getUserData");
  return response.data.user;
});
