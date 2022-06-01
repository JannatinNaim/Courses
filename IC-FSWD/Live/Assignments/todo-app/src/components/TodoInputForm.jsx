function TodoInputForm(props) {
  /**
   * Handle submit event on form.
   * @param {Event} event DOM Event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    props.editMode ? updateTodo() : createTodo();
  };

  /**
   * Create todo list.
   */
  const createTodo = () => {
    const todo = {
      id: (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, ""),
      name: props.todoName,
      completed: false,
    };

    props.setTodoList([todo, ...props.todoList]);
    props.setTodoName("");
  };

  /**
   * Update todo from list.
   */
  const updateTodo = () => {
    props.setTodoList(
      props.todoList.map((todo) => {
        if (todo.id === props.bufferTodo.id) todo.name = props.todoName;
        return todo;
      })
    );

    props.setTodoName("");
    props.setBufferTodo(null);
    props.setEditMode(false);
  };

  const cancelEdit = () => {
    props.setTodoName("");
    props.setBufferTodo(null);
    props.setEditMode(false);
  };

  return (
    <form action="#" className="todo-app__form" onSubmit={(event) => handleSubmit(event)}>
      <input
        required
        type="text"
        placeholder="I need to..."
        value={props.todoName}
        onChange={(event) => props.setTodoName(event.target.value)}
        className="todo-app__form__todo-name"
      />

      <button className="todo-app__form__todo-submit">{props.editMode ? "Update" : "Add"}Todo</button>
      {props.editMode ? (
        <button className="todo-app__form__todo-edit-cancel" onClick={() => cancelEdit()}>
          Cancel Edit
        </button>
      ) : (
        ""
      )}
    </form>
  );
}

export default TodoInputForm;
