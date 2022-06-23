import { useFetch } from "../hooks/useFetch";

const Todo = () => {
  const { data: todo, isLoading } = useFetch("https://jsonplaceholder.typicode.com/todos/1", null);

  return (
    <div>
      <h2>Todo One</h2>

      <p>{isLoading && <p>Loading...</p>}</p>
      <p>{todo?.title}</p>
    </div>
  );
};

export default Todo;
