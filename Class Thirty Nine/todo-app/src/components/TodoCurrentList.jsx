function TodoCurrentList(props) {
  const completeTodo = (todoId) => {
    const toBeCompletedTodo = props.todoList.find((todo) => todo.id === todoId);

    fetch("http://localhost:3000/TODOs/" + todoId, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        ...toBeCompletedTodo,
        completed: !toBeCompletedTodo.completed,
      }),
    }).then(() => props.fetchTODOs());
  };

  /**
   * Edit todo from list.
   * @param {String} todoId Todo Id.
   */
  const editTodo = (todoId) => {
    const todoToEdit = props.todoList.find((todo) => todo.id === todoId);
    props.setBufferTodo(todoToEdit);
    props.setTodoName(todoToEdit.name);
    props.setEditMode(true);
  };

  /**
   * Delete todo from list.
   * @param {String} todoId Todo Id.
   */
  const deleteTodo = (todoId) => {
    props.setTodoList(props.todoList.filter((todo) => todo.id !== todoId));
    fetch("http://localhost:3000/TODOs/" + todoId, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then(() => props.fetchTODOs());
  };

  return props.todoList.map((todo, index) => {
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
  });
}

export default TodoCurrentList;
