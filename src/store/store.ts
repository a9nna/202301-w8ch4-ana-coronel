import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { calculatorReducer } from "./feature/calculatorSlicer/calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
