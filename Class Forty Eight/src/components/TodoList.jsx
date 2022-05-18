import { useFetch } from "../hooks/useFetch";

const TodoList = () => {
  const { data: todoList, isLoading } = useFetch("https://jsonplaceholder.typicode.com/todos/", []);

  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {isLoading && <p>Loading...</p>}
        {todoList.slice(0,9).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
