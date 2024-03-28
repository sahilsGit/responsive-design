import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { AppState } from "./types";

// Define the initial state
const initialState: AppState = {
  revenue: 56950,
  users: 76.8,
  newSignUps: 116,
  retention: 12.67,
};

export const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
