import { useState } from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";

const ParentComponent = () => {
  const [counterThree, setCounterThree] = useState(0);
  console.log("I'm ParentComponent.")

  return (
    <div>
      <h2>Counter Three {counterThree}</h2>

      <button onClick={() => setCounterThree((p) => p + 1)}>Increment C2</button>

      <CounterOne />

      <CounterTwo />
    </div>
  );
};

export default ParentComponent;
