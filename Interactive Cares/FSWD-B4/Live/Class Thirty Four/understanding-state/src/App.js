import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (offset) => {
    setCounter(counter + offset);
  };

  const decrementCounter = (offset) => {
    setCounter(counter - offset);
  };

  return (
    <div className="App">
      <p>Counter: {counter}</p>

      <button
        onClick={() => {
          incrementCounter(1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          incrementCounter(5);
        }}
      >
        Increment By 5
      </button>

      <button
        onClick={() => {
          incrementCounter(10);
        }}
      >
        Increment By 10
      </button>

      <br />

      <button
        onClick={() => {
          decrementCounter(1);
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          decrementCounter(5);
        }}
      >
        Decrement By 5
      </button>

      <button
        onClick={() => {
          decrementCounter(10);
        }}
      >
        Decrement By 10
      </button>
    </div>
  );
}

export default App;
