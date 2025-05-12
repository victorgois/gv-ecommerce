import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    loadUser: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { login, logout, loadUser } = userSlice.actions;

export default userSlice.reducer; 