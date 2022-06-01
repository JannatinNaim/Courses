import { useState, memo, useCallback, useMemo } from "react";
import Button from "./Button";

const CounterOne = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterFour, setCounterFour] = useState(1000);
  console.log("I'm CounterOne.");

  const submitHandler = useCallback(() => setCounterOne((p) => p + 1), []);
  const submitHandlerFour = useCallback(() => setCounterFour((p) => p + 1), []);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 999999999) {
      i++;
    }

    return counterOne % 2 === 0 ? "Even" : "Odd";
  }, [counterOne]);

  return (
    <div>
      <h2>Counter One {counterOne}</h2>

      <p>{isEven}</p>

      <Button submitHandler={submitHandler} />

      <h2>Counter Four {counterFour}</h2>

      <Button submitHandler={submitHandlerFour} />
    </div>
  );
};

export default memo(CounterOne);
