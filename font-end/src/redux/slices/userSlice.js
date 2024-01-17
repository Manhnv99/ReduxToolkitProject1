import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listUser: [],
  isLoading: false,
  isError: false,
  name: "manh",
};

//hàm này là hàm coi như là dispatch 1 action xử lý việc không đồng bộ-> action.payload là kết quả trả ra của ham createAsyncThunk
export const fetchAllUser = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response = await axios.get(`http://localhost:8080/users/all`);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload;
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllUser.fulfilled, (state, action) => {
        state.listUser = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAllUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
