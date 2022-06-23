import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function TodoDetails() {
  const { id } = useParams();

  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  return (
    <div className="details">
      <Link to="/">Back To Home</Link>

      <p>Name: {todo?.title}</p>
      <p>isCompleted: {todo?.completed ? "true" : "false"}</p>
      <p>TodoID: {todo?.userId}</p>
    </div>
  );
}

export default TodoDetails;
