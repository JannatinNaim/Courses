import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(null);

  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(100);
  const [id, setId] = useState("");

  const luckyNum = 69;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="App">
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <div className="counterA">
        <p>Counter A = {counterA}</p>
        <button
          onClick={() => {
            setCounterA(counterA + 1);
          }}
        >
          Increase
        </button>
      </div>

      <div className="counterB">
        <p>Counter B = {counterB}</p>
        <button
          onClick={() => {
            setCounterB(counterB + 1);
          }}
        >
          Increase
        </button>
      </div>

      <h1>Todo: {todo?.title}</h1>
    </div>
  );
}

export default App;
