import { createSlice } from "@reduxjs/toolkit";
import {
  getPaginatedUsers,
  updateUserInformation,
} from "../thunkFunctions/userThunks/userThunks";
const initialState = {
  users: [],
  status: "idle",
  error: "",
  user: {},
  page: 1,
};

const userSlice = createSlice({
  initialState: initialState,
  name: "User",
  reducers: {
    setUserPageNumber(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPaginatedUsers.pending, (state) => {
        state.status = "pending";
        state.users = [];
        state.error = "";
      })
      .addCase(getPaginatedUsers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.users = action.payload;
      })
      .addCase(getPaginatedUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(updateUserInformation.pending, (state) => {
        state.status = "pending";
        state.user = {};
        state.error = "";
      })
      .addCase(updateUserInformation.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.user.isDisabled = !state.user.isDisabled;
        if (state.users.length) {
          const index = state.users.findIndex(
            (user) => user._id === state.user._id
          );
          state.users[index] = state.user;
        }
      })
      .addCase(updateUserInformation.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { setUserPageNumber } = userSlice.actions;
