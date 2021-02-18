import React, { useReducer } from "react";

const initialState = {
  firstCount: 0
};
const reduce = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "reset":
      return initialState;
    default:
      return { ...state, firstCount: initialState.firstCount };
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reduce, initialState);

  return (
    <>
      <div>
        <div>Count - {count.firstCount}</div>
        <button onClick={() => dispatch({ type: "increment", value: 12 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 12 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset", value: 12 })}>
          reset
        </button>
      </div>
    </>
  );
}

export default CounterTwo;
