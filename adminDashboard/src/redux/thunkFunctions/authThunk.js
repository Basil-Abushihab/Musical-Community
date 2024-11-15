import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axiosInstance";
export const loginAdmin = createAsyncThunk(
  "adminAuth/loginAdmin",
  async (adminData) => {
    const response = await axios.post("/api/admins/loginAdmin", adminData);
    return response.data.admin;
  }
);
