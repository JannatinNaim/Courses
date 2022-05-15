import { useContext } from "react";
import ListActions from "./ListActions";
import { TasksContext } from "../contexts/TasksContext";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function List(props) {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="list">
      <div className="list__info">
        <span className="list__info__name">{props.list.listName}</span>

        <ListActions board={props.board} list={props.list} />
      </div>

      <TaskForm board={props.board} list={props.list} />

      {tasks.map((task) => {
        if (task.taskListID !== props.list.listID) return "";

        return <Task key={task.taskID} board={props.board} list={props.list} task={task} />;
      })}
    </div>
  );
}
