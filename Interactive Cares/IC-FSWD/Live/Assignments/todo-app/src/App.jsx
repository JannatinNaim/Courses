import { useState } from "react";
import "./App.scss";
import TodoInputForm from "./components/TodoInputForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [bufferTodo, setBufferTodo] = useState(null);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="app">
      <h1 className="app__name">Todo App</h1>

      <div className="todo-app">
        <TodoInputForm
          todoName={todoName}
          setTodoName={setTodoName}
          todoList={todoList}
          setTodoList={setTodoList}
          bufferTodo={bufferTodo}
          setBufferTodo={setBufferTodo}
          editMode={editMode}
          setEditMode={setEditMode}
        />

        <h2 className="todo-app__name">Things You Need To Get Done</h2>

        <TodoList
          setTodoName={setTodoName}
          todoList={todoList}
          setTodoList={setTodoList}
          setBufferTodo={setBufferTodo}
          setEditMode={setEditMode}
        />
      </div>
    </div>
  );
};

export default App;
