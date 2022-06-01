import { Link } from "react-router-dom";

function TodoList(props) {
  const { TODOs, setTodoName, setTodoDescription, setEditMode, fetchTODOs, setBufferTodo } = props;

  function toggleTodoCompletion(todoId) {
    let toBeCompletedTodo = TODOs.find((todo) => todo.id === todoId);
    toBeCompletedTodo.completed = !toBeCompletedTodo.completed;

    fetch("http://localhost:3000/TODOs/" + todoId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toBeCompletedTodo),
    }).then(() => fetchTODOs());
  }

  function editTodo(todoId) {
    const toBeEditedTodo = TODOs.find((todo) => todo.id === todoId);

    setEditMode(true);
    setBufferTodo(toBeEditedTodo);
    setTodoName(toBeEditedTodo.name);
    setTodoDescription(toBeEditedTodo.description);
  }

  function deleteTodo(todoId) {
    fetch("http://localhost:3000/TODOs/" + todoId, {
      method: "DELETE",
    }).then(() => fetchTODOs());
  }

  return (
    <div className="todo-list">
      <ul className="todo-list__current">
        {TODOs.map((todo, index) =>
          !todo.completed ? (
            <li key={index} className="todo-preview">
              <Link to={`/todo/${todo.id}`} className="todo-preview__content">
                <span className="todo-preview__content__name">{todo.name}</span>

                <p className="todo-preview__content__description">{todo.description}</p>
              </Link>

              <div className="todo-preview__actions">
                <button
                  className="todo-preview__action todo-preview__action--complete"
                  onClick={() => toggleTodoCompletion(todo.id)}
                >
                  Complete
                </button>

                <button className="todo-preview__action todo-preview__action--edit" onClick={() => editTodo(todo.id)}>
                  Edit
                </button>

                <button
                  className="todo-preview__action todo-preview__action--delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ) : (
            ""
          )
        )}
      </ul>

      <ul className="todo-list__completed">
        {TODOs.map((todo, index) =>
          todo.completed ? (
            <li key={index} className="todo-preview todo-preview--completed">
              <Link to={`/todo/${todo.id}`} className="todo-preview__content">
                <span className="todo-preview__content__name">{todo.name}</span>
              </Link>

              <div className="todo-preview__actions">
                <button
                  className="todo-preview__action todo-preview__action--undo"
                  onClick={() => toggleTodoCompletion(todo.id)}
                >
                  Undo
                </button>

                <button
                  className="todo-preview__action todo-preview__action--delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

export default TodoList;
