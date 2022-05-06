import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
