import { useState, useReducer } from "react";
import "./App.scss";
import CounterIncrementOrDecrementButton from "./components/CounterIncrementOrDecrementButton";
import counterReducer from "./functions/counterReducer";

function App() {
  const [counterState, dispatchCounterState] = useReducer(counterReducer, 0);
  const [customOffset, setCustomOffset] = useState(0);
  const offsetValues = [1, 5, 10, 15, 20, 25];

  return (
    <div className="app">
      <h1 className="app__name">Counter App</h1>

      <h1 className="counter-display">{counterState}</h1>

      <div className="increment-buttons">
        {offsetValues.map((offsetValue, index) => (
          <CounterIncrementOrDecrementButton
            key={index}
            buttonName="Increment"
            offset={offsetValue}
            action={() =>
              dispatchCounterState({
                actionName: "increment",
                offset: offsetValue,
              })
            }
          />
        ))}
      </div>

      <div className="decrement-buttons">
        {offsetValues.map((offsetValue, index) => (
          <CounterIncrementOrDecrementButton
            key={index}
            buttonName="Decrement"
            offset={offsetValue}
            action={() =>
              dispatchCounterState({
                actionName: "decrement",
                offset: offsetValue,
              })
            }
          />
        ))}
      </div>

      <input
        type="number"
        placeholder="Custom offset..."
        className="custom-increment-or-decrement-value"
        value={customOffset}
        onChange={(e) => setCustomOffset(e.target.value)}
      />

      <div className="custom-increment-or-decrement-buttons">
        <CounterIncrementOrDecrementButton
          buttonName="Increment"
          offset={customOffset}
          action={() =>
            dispatchCounterState({
              actionName: "increment",
              offset: Number(customOffset),
            })
          }
        />

        <CounterIncrementOrDecrementButton
          buttonName="Decrement"
          offset={customOffset}
          action={() =>
            dispatchCounterState({
              actionName: "decrement",
              offset: Number(customOffset),
            })
          }
        />
      </div>
    </div>
  );
}

export default App;
