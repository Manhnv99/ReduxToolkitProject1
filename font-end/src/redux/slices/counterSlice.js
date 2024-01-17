import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
};


// const fetchAllUser = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async () => {
//     const response = await axios
//     return response.data
//   }
// )


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue:(state,action)=>{
      state.value=action.payload
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
//khai báo những action được định nghĩa trong createSlide
export const { increment, decrement,setValue, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
