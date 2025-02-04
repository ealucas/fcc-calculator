import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./features/CalculatorSlice.js"; // Import the calculator slice

// Create the Redux store
const Store = configureStore({
  reducer: {
    calculator: calculatorReducer, // Add the calculator slice
  },
});

export default Store;