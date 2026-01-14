import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  selectedUser:JSON.parse( localStorage.getItem("selectedUser")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token,user } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("token", token);
    },
    setSelectedUser:(state,action)=>{
       state.selectedUser = action.payload;
       localStorage.setItem("selectedUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.selectedUser=null
      localStorage.removeItem("token");
      localStorage.removeItem("selectedUser");
    },
  },
});

export const { setCredentials, logout, setSelectedUser } = authSlice.actions;

export default authSlice.reducer;
