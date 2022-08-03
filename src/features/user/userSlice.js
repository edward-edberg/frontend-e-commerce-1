import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/";

const initialState = {
  isLoading: true,
  users: [],
};

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (name, thunkAPI) => {
    try {
      const res = await axios(url);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
