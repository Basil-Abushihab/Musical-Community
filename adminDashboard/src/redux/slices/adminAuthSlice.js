import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "../thunkFunctions/authThunk";
const initialState = { user: {}, status: "idle", error: "" };

const adminAuthSlice = createSlice({
  initialState: initialState,
  name: "adminAuth",
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.user = {};
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = "";
        state.user = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
        state.user = {};
      });
  },
});

export default adminAuthSlice.reducer;
