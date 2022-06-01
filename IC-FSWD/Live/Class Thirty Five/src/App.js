import "./App.css";
import { useState } from "react";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  function createTodoHandler(event) {
    event.preventDefault();

    if (!todoTitle) return alert("Please enter a valid ToDo.");

    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      isCompleted: false,
    };

    setTodoList([newTodo, ...todoList]);
    setTodoTitle("");
  }

  function deleteTodoHandler(todoId) {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  }

  function editTodoHandler(todoId) {
    setEditMode(true);
    const todoToBeEdited = todoList.find((todo) => todo.id === todoId);

    setEditableTodo(todoToBeEdited);

    setTodoTitle(todoToBeEdited.title);
  }

  function updateHandler(event) {
    event.preventDefault();

    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editableTodo.id) todo.title = todoTitle;
        return todo;
      })
    );

    setEditMode(false);
    setEditableTodo(null);
    setTodoTitle("");
  }

  return (
    <div className="App">
      <form className="todo-app" onSubmit={(event) => (editMode ? updateHandler(event) : createTodoHandler(event))}>
        <input
          required
          placeholder="I need to..."
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />

        <button type="submit">{editMode ? "Update" : "Add"} Todo</button>
      </form>

      <ul className="todo-list">
        {todoList.map((todo) => (
          <li>
            <span>{todo.title}</span>
            <button onClick={() => editTodoHandler(todo.id)}>Edit Todo</button>
            <button onClick={() => deleteTodoHandler(todo.id)}>Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
