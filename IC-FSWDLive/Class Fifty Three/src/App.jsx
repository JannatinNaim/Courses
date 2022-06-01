import { useEffect, useRef } from "react";
import "./App.scss";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="app">
      <h1>How's it going?</h1>
      <input ref={inputRef} type="text" placeholder="TITLE" />
    </div>
  );
}

export default App;
