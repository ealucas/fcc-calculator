import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addInput, equals, clear } from "../features/CalculatorSlice.js";
import "./css/Calculator.css";

const Calculator = () => {
  const dispatch = useDispatch();

  const handleInput = (value) => {
    dispatch(addInput(value));
  };
  const handleClear = () => {
    dispatch(clear());
  }
  const handleResult = () => {
    dispatch(equals());
  }

  const expression = useSelector((state) => state.calculator.expression);

  return (
    <div className="calculator">
      <div id="display">{expression ? expression : 0}</div>
      <div className="pad">
        <div className="numpad">
          <button id="seven" onClick={() => handleInput(7)} >7</button>
          <button id="eight" onClick={() => handleInput(8)}>8</button>
          <button id="nine" onClick={() => handleInput(9)}>9</button>
          <button id="four" onClick={() => handleInput(4)}>4</button>
          <button id="five"onClick={() => handleInput(5)}>5</button>
          <button id="six" onClick={() => handleInput(6)}>6</button>
          <button id="one" onClick={() => handleInput(1)}>1</button>
          <button id="two" onClick={() => handleInput(2)}> 2</button>
          <button id="three" onClick={() => handleInput(3)}>3</button>
          <button id="zero" onClick={() => handleInput(0)}>0</button>
          <button id="decimal" onClick={() => handleInput('.')}>.</button>
          <button id="equals" onClick={() => handleResult()}>=</button>
        </div>
        <div className="operations">
          <button id="add" onClick={() => handleInput('+')}>+</button>
          <button id="subtract" onClick={() => handleInput('-')}>-</button>
          <button id="multiply" onClick={() => handleInput('*')}>x</button>
          <button id="divide" onClick={() => handleInput('/')}>/</button>
          <button id="clear" onClick={() => handleClear()}>CLEAR</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
