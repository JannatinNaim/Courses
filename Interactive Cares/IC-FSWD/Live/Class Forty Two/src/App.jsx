import "./App.scss";
import { useState, useReducer } from "react";
import counterReducer from "./reducers/counterReducer";

function App() {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  const [offset, setOffset] = useState(0);

  return (
    <div className="app">
      <div className="counter-a">
        <input type="number" value={offset} onChange={(e) => setOffset(e.target.value)} />

        <p>Counter A: {counter}</p>

        <button onClick={() => dispatch({ type: "increment", offset: 1 })}>Increment</button>
        <button onClick={() => dispatch({ type: "increment", offset: 10 })}>Increment by 10</button>
        <button onClick={() => dispatch({ type: "increment", offset: Number(offset) })}>Increment by {offset}</button>
        <button onClick={() => dispatch({ type: "decrement", offset: 1 })}>Decrement</button>
        <button onClick={() => dispatch({ type: "decrement", offset: 10 })}>Decrement by 10</button>
        <button onClick={() => dispatch({ type: "decrement", offset: Number(offset) })}>Decrement by {offset}</button>
      </div>
    </div>
  );
}

export default App;
