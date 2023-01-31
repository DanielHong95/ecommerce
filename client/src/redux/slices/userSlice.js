import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currUser
);

const userSlice = createSlice({
  name: "user",
  initialState: { currUser: null },
  reducers: {
    setCurrUser: (state, action) => {
      state.currUser = action.payload;
    },
    logoutCurrUser: (state) => {
      localStorage.removeItem("token");
      state.currUser = null;
    },
  },
});

export const { setCurrUser, logoutCurrUser } = userSlice.actions;

export default userSlice.reducer;
