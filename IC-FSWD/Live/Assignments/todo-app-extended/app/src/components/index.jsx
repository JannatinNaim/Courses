import { useState, useEffect } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Index() {
  const [TODOs, setTODOs] = useState([]);

  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [bufferTodo, setBufferTodo] = useState(null);

  function fetchTODOs() {
    fetch("http://localhost:3000/TODOs/")
      .then((res) => res.json())
      .then((data) => setTODOs(data));
  }

  useEffect(fetchTODOs, []);

  return (
    <div className="main">
      <h1 className="main__name">Todo App</h1>

      <TodoForm
        TODOs={TODOs}
        todoName={todoName}
        setTodoName={setTodoName}
        todoDescription={todoDescription}
        setTodoDescription={setTodoDescription}
        editMode={editMode}
        setEditMode={setEditMode}
        bufferTodo={bufferTodo}
        setBufferTodo={setBufferTodo}
        fetchTODOs={fetchTODOs}
      />

      <TodoList
        TODOs={TODOs}
        setTodoName={setTodoName}
        setTodoDescription={setTodoDescription}
        setEditMode={setEditMode}
        setBufferTodo={setBufferTodo}
        fetchTODOs={fetchTODOs}
      />
    </div>
  );
}

export default Index;
