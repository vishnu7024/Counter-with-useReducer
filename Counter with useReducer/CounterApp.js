import React, { useReducer } from "react";
import counterReducer from "./reducers/counterReducer";

const CounterApp = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <button id="increment-btn" onClick={increment}>
        Increment
      </button>
      <span id="counter">{counter}</span>
      <button id="decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default CounterApp;
