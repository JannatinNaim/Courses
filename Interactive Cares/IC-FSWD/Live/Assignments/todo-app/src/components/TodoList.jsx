import TodoCompletedList from "./TodoCompletedList";
import TodoCurrentList from "./TodoCurrentList";

function TodoList(props) {
  return (
    <ul className="todo-app__list">
      <TodoCurrentList
        setTodoName={props.setTodoName}
        todoList={props.todoList}
        setTodoList={props.setTodoList}
        setBufferTodo={props.setBufferTodo}
        setEditMode={props.setEditMode}
      />
      <TodoCompletedList todoList={props.todoList} setTodoList={props.setTodoList} />
    </ul>
  );
}

export default TodoList;
