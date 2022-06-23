import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Todo() {
  const { id } = useParams();

  const [todo, setTodo] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/TODOs/" + id)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  return (
    <div className="todo">
      <div className="todo__content">
        <span className="todo__content__name">{todo?.name}</span>

        <p className="todo__content__description">{todo?.description}</p>
      </div>

      <Link to="/" className="todo__back-to-home">
        Back To Home
      </Link>
    </div>
  );
}

export default Todo;
