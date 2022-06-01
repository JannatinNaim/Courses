import { createContext, useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer";

export const TasksContext = createContext();

export default function TasksContextProvider(props) {
  const [tasks, dispatchTasksAction] = useReducer(tasksReducer, []);

  return <TasksContext.Provider value={{ tasks, dispatchTasksAction }}>{props.children}</TasksContext.Provider>;
}
