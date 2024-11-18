import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const getPaginatedUsers = createAsyncThunk(
  "user/getPaginatedUsers",
  async (page) => {
    const response = await axios.get(
      `/api/users/getPaginatedUsers?page=${page}`
    );
    return response.data.users;
  }
);

export const updateUserInformation = createAsyncThunk(
  "user/updateUserInformation",
  async (updatedData) => {
    const response = await axios.put("/api/users/updateUserData", updatedData);
    return response.data.user;
  }
);
