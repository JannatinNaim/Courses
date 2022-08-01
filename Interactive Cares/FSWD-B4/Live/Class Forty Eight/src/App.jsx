// import ParentComponent from "./components/ParentComponent";
import TodoList from "./components/TodoList";
import Post from "./components/Post";
import Todo from "./components/Todo";
import "./App.scss";

function App() {
  return (
    <div className="app">
      {/* <ParentComponent /> */}
      <TodoList />
      <Post />
      <Todo />
    </div>
  );
}

export default App;
