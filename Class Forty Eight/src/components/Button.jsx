import { memo } from "react";

const Button = ({ submitHandler }) => {
  console.log("I'm Button");
  return <button onClick={submitHandler}>Increment</button>;
};

export default memo(Button);
