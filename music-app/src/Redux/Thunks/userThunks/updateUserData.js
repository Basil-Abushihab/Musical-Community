import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (updatedData) => {
    const response = await axios.put("/api/users/updateUserData", updatedData, {
      headers: { "Content-Type": "multipart/formdata" },
    });
    return response.data.updatedUser;
  }
);
