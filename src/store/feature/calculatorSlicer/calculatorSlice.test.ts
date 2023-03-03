import { Calculator } from "../../../types";
import {
  addNumbersToCurrentNumberActionPayload,
  calculatorReducer,
} from "./calculatorSlice";

describe("Given the calculatorReducer function", () => {
  describe("When it receives the current state and addNumbersToCurrentNumberActionCreator with a number", () => {
    test("Then it should return the new state", () => {
      const numberToAdd = "6";
      const currentCalculatorState: Calculator = {
        currentNumber: "231",
        formerNumber: "",
        operator: "",
      };
      const newCalculatorState: Calculator = {
        currentNumber: "2316",
        formerNumber: "",
        operator: "",
      };

      const newNumber = calculatorReducer(
        currentCalculatorState,
        addNumbersToCurrentNumberActionPayload(numberToAdd)
      );

      expect(newNumber).toStrictEqual(newCalculatorState);
    });
  });
});
