import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../Thunks/authThunks/authThunk";

const authStorage = JSON.parse(sessionStorage.getItem("auth"));

const initialState = {
  isLoggedIn: authStorage?.isLoggedIn || false,
  username: authStorage?.username || "",
  status: "idle",
  error: "",
};

const authSlice = createSlice({
  initialState: initialState,
  name: "auth",
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.isLoggedIn = false;
        state.username = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.isLoggedIn = true;

        state.username = action.payload.user.username;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "rejected";
        state.status = "failed";

        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
        state.error = "";
        state.isLoggedIn = false;
        state.username = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.isLoggedIn = true;
        state.username = action.payload.user.username;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "rejected";
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default authSlice.reducer;
