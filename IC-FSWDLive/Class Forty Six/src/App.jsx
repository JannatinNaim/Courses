import "./App.scss";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [counter, setCunter] = useState(0);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch({ type: "INCREASE", payload: 5 })}>Add by 5</button>
      <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>Add by 10</button>
      <button onClick={() => dispatch({ type: "INCREASE", payload: 15 })}>Add by 15</button>

      <button onClick={() => dispatch({ type: "DECREASE", payload: -5 })}>Decrease by 5</button>
      <button onClick={() => dispatch({ type: "DECREASE", payload: -10 })}>Decrease by 10</button>
      <button onClick={() => dispatch({ type: "DECREASE", payload: -15 })}>Decrease by 15</button>
    </div>
  );
}

export default App;
