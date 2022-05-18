import { useState, memo, useCallback } from "react";
import Button from "./Button";

const CounterTwo = () => {
  const [counterTwo, setCounterTwo] = useState(0);
  console.log("I'm CounterTwo.");

  const submitHandler = useCallback(() => setCounterTwo((p) => p + 10), []);

  return (
    <div>
      <h2>Counter Two {counterTwo}</h2>

      <Button submitHandler={submitHandler} />
    </div>
  );
};

export default memo(CounterTwo);
