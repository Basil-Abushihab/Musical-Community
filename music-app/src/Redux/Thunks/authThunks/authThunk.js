import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    try {
      const response = await axios.post("/api/auth/loginUser", userData, {
        headers: { "Content-Type": "multipart/formdata" },
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    try {
      const response = await axios.post("api/auth/registerUser", userData, {
        headers: { "Content-Type": "multipart/formdata" },
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
);
