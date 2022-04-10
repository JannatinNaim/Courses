import { useState } from "react";
import "./App.scss";

const App = () => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [bufferTodo, setBufferTodo] = useState(null);
  const [editMode, setEditMode] = useState(false);

  /**
   * Handle submit event on form.
   * @param {Event} event DOM Event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    editMode ? updateTodo() : createTodo();
  };

  /**
   * Create todo list.
   */
  const createTodo = () => {
    const todo = {
      id: (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, ""),
      name: todoName,
      completed: false,
    };

    setTodoList([todo, ...todoList]);
    setTodoName("");
  };

  /**
   * Delete todo from list.
   * @param {String} todoId Todo Id.
   */
  const deleteTodo = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  /**
   * Edit todo from list.
   * @param {String} todoId Todo Id.
   */
  const editTodo = (todoId) => {
    const todoToEdit = todoList.find((todo) => todo.id === todoId);
    setBufferTodo(todoToEdit);
    setTodoName(todoToEdit.name);
    setEditMode(true);
  };

  /**
   * Update todo from list.
   */
  const updateTodo = () => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === bufferTodo.id) todo.name = todoName;
        return todo;
      })
    );

    setTodoName("");
    setBufferTodo(null);
    setEditMode(false);
  };

  const cancelEdit = () => {
    setTodoName("");
    setBufferTodo(null);
    setEditMode(false);
  };

  const completeTodo = (todoId) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoId) todo.completed = true;
        return todo;
      })
    );
  };

  const undoComplete = (todoId) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoId) todo.completed = false;
        return todo;
      })
    );
  };

  return (
    <div className="app">
      <h1 className="app__name">Todo App</h1>

      <div className="todo-app">
        <form action="#" className="todo-app__form" onSubmit={(event) => handleSubmit(event)}>
          <input
            required
            type="text"
            placeholder="I need to..."
            value={todoName}
            onChange={(event) => setTodoName(event.target.value)}
            className="todo-app__form__todo-name"
          />

          <button className="todo-app__form__todo-submit">{editMode ? "Update" : "Add"}Todo</button>
          {editMode ? (
            <button className="todo-app__form__todo-edit-cancel" onClick={() => cancelEdit()}>
              Cancel Edit
            </button>
          ) : (
            ""
          )}
        </form>

        <h2 className="todo-app__name">Things You Need To Get Done</h2>

        <ul className="todo-app__list">
          {todoList.map((todo, index) => {
            if (todo.completed) return "";

            return (
              <li className="todo-app__list__item" key={index}>
                <span className="todo-app__list__item__name">{todo.name}</span>

                <div className="todo-app__list__item__action">
                  <button
                    className="todo-app__list__item__action__button todo-app__list__item__action__button--complete"
                    onClick={() => completeTodo(todo.id)}
                  >
                    Complete
                  </button>
                  <button
                    className="todo-app__list__item__action__button todo-app__list__item__action__button--edit"
                    onClick={() => editTodo(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="todo-app__list__item__action__button todo-app__list__item__action__button--delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}

          {todoList.map((todo, index) => {
            if (!todo.completed) return "";

            return (
              <li className="todo-app__list__item todo-app__list__item--complete" key={index}>
                <span className="todo-app__list__item__name">{todo.name}</span>

                <div className="todo-app__list__item__action">
                  <button
                    className="todo-app__list__item__action__button todo-app__list__item__action__button--undo"
                    onClick={() => undoComplete(todo.id)}
                  >
                    Undo
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
