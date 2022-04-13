import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [offset, setOffset] = useState();

  const increment = (n) => {
    setCounter(counter + n);
  };

  const decrement = (n) => {
    setCounter(counter - n);
  };

  return (
    <div className="app">
      <h1 className="app__name">Counter</h1>

      <span className="counter__number">{counter}</span>

      <div className="increment_buttons">
        <button className="increment_button" onClick={() => increment(1)}>
          Increment by 1
        </button>
        <button className="increment_button" onClick={() => increment(5)}>
          Increment by 5
        </button>
        <button className="increment_button" onClick={() => increment(10)}>
          Increment by 10
        </button>
      </div>

      <div className="decrement_buttons">
        <button className="decrement_button" onClick={() => decrement(1)}>
          Decrement by 1
        </button>
        <button className="decrement_button" onClick={() => decrement(5)}>
          Decrement by 5
        </button>
        <button className="decrement_button" onClick={() => decrement(10)}>
          Decrement by 10
        </button>
      </div>

      <div className="offset_count">
        <input
          type="text"
          className="offset_input"
          placeholder="Offset"
          value={offset}
          onChange={(event) => setOffset(event.target.value)}
        />

        <div className="offset_buttons">
          <button className="offset_increment" onClick={() => increment(offset)}>
            Increment by {offset ?? 0}
          </button>
          <button className="offset_decrement" onClick={() => decrement(offset)}>
            Decrement by {offset ?? 0}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
