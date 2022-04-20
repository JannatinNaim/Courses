function TodoCompletedList(props) {
  const undoComplete = (todoId) => {
    const toBeUndoneTodo = props.todoList.find((todo) => todo.id === todoId);

    fetch("http://localhost:3000/TODOs/" + todoId, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        ...toBeUndoneTodo,
        completed: !toBeUndoneTodo.completed,
      }),
    }).then(() => props.fetchTODOs());
  };

  return props.todoList.map((todo, index) => {
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
  });
}

export default TodoCompletedList;
