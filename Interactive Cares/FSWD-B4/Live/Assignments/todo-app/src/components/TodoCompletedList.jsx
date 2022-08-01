function TodoCompletedList(props) {
  const undoComplete = (todoId) => {
    props.setTodoList(
      props.todoList.map((todo) => {
        if (todo.id === todoId) todo.completed = false;
        return todo;
      })
    );
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
