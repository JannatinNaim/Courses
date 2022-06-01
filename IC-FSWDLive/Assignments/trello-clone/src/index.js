import ReactDOM from "react-dom/client";
import App from "./App";
import BoardsProvider from "./contexts/BoardsContext";
import ListsProvider from "./contexts/ListsContext";
import TasksProvider from "./contexts/TasksContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BoardsProvider>
    <ListsProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </ListsProvider>
  </BoardsProvider>
);
