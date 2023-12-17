import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "./api/recipe-api";
import recipeReducer from "./slices/recipe";
import likeReducer from "./slices/like";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    recipe: recipeReducer,
    like: likeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
