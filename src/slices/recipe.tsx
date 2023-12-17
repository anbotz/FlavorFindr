import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Health } from "../types/type";

interface recipeState {
  q: string;
  health: Health;
}

const initialState: recipeState = {
  q: "",
  health: "",
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.q = action.payload;
    },
    filterHealth: (state, action: PayloadAction<Health>) => {
      state.health = action.payload;
    },
  },
});

export const { search, filterHealth } = recipeSlice.actions;

export default recipeSlice.reducer;
