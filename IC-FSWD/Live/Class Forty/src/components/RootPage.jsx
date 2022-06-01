import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RootPage() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => setTodoList(data));
  }, []);

  return (
    <div>
      <h2>Heyo! I'm Root.</h2>

      <Link to="/a">Path A</Link>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <Link to={"todo/" + todo.id}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RootPage;
