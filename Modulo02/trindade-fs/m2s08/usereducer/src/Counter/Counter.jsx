import React, { StrictMode } from "react";
import { useState, useReducer } from "react";
import './Counter.css'

const reducer = (state, action) => {
  if (action.type === "aumenta") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "dobra") {
    return {
      counter: state.counter * 2,
    };
  }
  if (action.type === "diminui") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "limpar") {
    return {
      counter: state.counter * 0,
    };
  }
};

function Counter() {
  /* const [counter, setCounter] = useState(0)
    
    const aumenta = () => {
        setCounter(counter + 1)
    }

    const dobra = () => {
        setCounter(counter + 2)
    }

    const diminui = () => {
        setCounter(counter - 1)
    } */

  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <>
      <h1>{state.counter}</h1>
      <div className="card">
        <button className="btn btn-success" onClick={() => dispatch({ type: "aumenta" })}>+</button>
        <button className="btn btn-primary" onClick={() => dispatch({ type: "dobra" })}>2x</button>
        <button className="btn btn-danger" onClick={() => dispatch({ type: "diminui" })}>-</button>
        <button className="btn btn-warning" onClick={() => dispatch({ type: "limpar" })}>Limpar</button>

      </div>
    </>
  );
}

export default Counter;
