import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Uri } from "../types/type";

interface likeState {
  likes: Uri[];
}

const initialState: likeState = {
  likes: [],
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    like: (state, action: PayloadAction<Uri>) => {
      state.likes = [...state.likes, action.payload];
    },
    dislike: (state, action: PayloadAction<Uri>) => {
      state.likes = state.likes.filter((like: Uri) => like !== action.payload);
    },
  },
});

export const { like, dislike } = likeSlice.actions;

export default likeSlice.reducer;
