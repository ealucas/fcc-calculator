import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expression: "",
  result: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addInput: (state, action) => {
      const lastNumber = state.expression.split(/[\+\-\*\/]/).pop();
      const operations = ["*", "/", "+", "-"];

      if (state.result === 0 && lastNumber === "0") {
        return;
      }

      if (action.payload === "." && lastNumber.includes(".")) {
        return;
      }

      state.expression += action.payload;
    },
    equals: (state) => {
      const newExpression = state.expression.replace(
        /[+\-*/]{2,}/g,
        (match) => {
          if (match.length === 2) {
            const [firstOp, secondOp] = match;
            if (
              (firstOp === "+" || firstOp === "*" || firstOp === "/") &&
              secondOp === "-"
            ) {
              return match; // e.g. "*-"
            }
          }

          for (let i = match.length - 1; i >= 0; i--) {
            if (match[i] !== "-") {
              return match[i];
            }
          }
          return "-";
        }
      );
      state.expression = eval(newExpression).toString();
    },
    clear: (state) => {
      state.expression = "";
    },
  },
});

// ✅ Make sure this exports `addInput`
export const { addInput, equals, clear } = calculatorSlice.actions;
export default calculatorSlice.reducer;
