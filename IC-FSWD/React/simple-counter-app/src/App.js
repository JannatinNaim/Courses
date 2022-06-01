import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(payload) {
    setCounter(counter + payload);
  }

  function decrementCounter(payload) {
    setCounter(counter - payload);
  }

  return (
    <div className="App">
      <div className="counter-app">
        <p>Counter : {counter}</p>

        <button
          onClick={() => {
            incrementCounter(5);
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            decrementCounter(2);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
