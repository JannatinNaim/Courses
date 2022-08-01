import "./App.css";
import { useState } from "react";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const createHandler = () => {
    // setTodoList([...todoList, todoTitle]);
    // setTodoList([todoTitle, ...todoList]);

    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    };

    setTodoList([newTodo, ...todoList]);

    setTodoTitle("");
  };

  const editHandler = (id) => {
    const toBeEditedTodo = todoList.find((todo) => todo.id === id);

    setIsEditable(true);
    setEditableTodo(toBeEditedTodo);
    setTodoTitle(toBeEditedTodo.title);
  };

  const updateHandler = () => {
    editableTodo.title = todoTitle;
    setTodoTitle("");
    setIsEditable(false);
    setEditableTodo(null);
  };

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <form onSubmit={(event) => event.preventDefault()}>
        <input value={todoTitle} type="text" name="todoTitle" onChange={(event) => setTodoTitle(event.target.value)} />
        <button onClick={() => (isEditable ? updateHandler() : createHandler())}>
          {isEditable ? "Update" : "Add"} Todo
        </button>
      </form>

      <ul>
        {todoList.map((todo) => (
          <li>
            <span>{todo.title}</span>

            <button onClick={() => editHandler(todo.id)}>Edit</button>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
