function TodoForm(props) {
  const {
    TODOs,
    todoName,
    setTodoName,
    todoDescription,
    setTodoDescription,
    editMode,
    setEditMode,
    bufferTodo,
    setBufferTodo,
    fetchTODOs,
  } = props;

  function handleTodoSubmit(e) {
    e.preventDefault();

    !editMode ? addTodo() : updateTodo();
  }

  function addTodo() {
    const todo = {
      id: Date.now(),
      name: todoName,
      description: todoDescription,
      completed: false,
    };

    fetch("http://localhost:3000/TODOs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(() => fetchTODOs());

    setTodoName("");
    setTodoDescription("");
  }

  function updateTodo() {
    let toBeUpdatedTodo = TODOs.find((todo) => todo.id === bufferTodo.id);
    toBeUpdatedTodo.name = todoName;
    toBeUpdatedTodo.description = todoDescription;

    fetch("http://localhost:3000/TODOs/" + bufferTodo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toBeUpdatedTodo),
    }).then(() => fetchTODOs());

    cancelEdit();
  }

  function cancelEdit() {
    setEditMode(false);
    setBufferTodo(null);
    setTodoName("");
    setTodoDescription("");
  }

  return (
    <form className="todo-form" onSubmit={(e) => handleTodoSubmit(e)}>
      <input
        className="todo-form__name"
        required
        type="text"
        placeholder="I need to..."
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />

      <textarea
        className="todo-form__description"
        placeholder="I should remember that..."
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      ></textarea>

      <button type="submit" className={`todo-form__submit todo-form__submit--${!editMode ? "add" : "update"}`}>
        {!editMode ? "Add" : "Update"} Todo
      </button>

      {editMode ? (
        <button onClick={cancelEdit} className="todo-form__cancel">
          Cancel Edit
        </button>
      ) : (
        ""
      )}
    </form>
  );
}

export default TodoForm;
