import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Calculator } from "../../../types";

const initialCalculatorState: Calculator = {
  currentNumber: "1",
  formerNumber: "",
  operator: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialCalculatorState,
  reducers: {
    addNumbersToCurrentNumber: (
      currentCalculatorState: Calculator,
      action: PayloadAction<String>
    ): Calculator => ({
      ...currentCalculatorState,
      currentNumber: `${currentCalculatorState.currentNumber}${action.payload}`,
    }),
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const {
  addNumbersToCurrentNumber: addNumbersToCurrentNumberActionPayload,
} = calculatorSlice.actions;
