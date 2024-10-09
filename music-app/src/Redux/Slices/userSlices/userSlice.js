import { createSlice } from "@reduxjs/toolkit";
import { getUserByID } from "../../Thunks/userThunks/getUserThunk";
const initialState = { status: "idle", error: "", user: {} };

const userSlice = createSlice({
  initialState: initialState,
  name: "user",
  extraReducers: (builder) => {
    builder
      .addCase(getUserByID.pending, (state, action) => {
        state.status = "pending";
        state.user = {};
        state.error = "";
      })
      .addCase(getUserByID.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(getUserByID.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "rejected";
      });
  },
});

export default userSlice.reducer;
