import React, { useReducer } from "react";

const initialState = 0;
const reduce = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterOne() {
  const [count, dispatch] = useReducer(reduce, initialState);

  return (
    <>
      <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
    </>
  );
}

export default CounterOne;
