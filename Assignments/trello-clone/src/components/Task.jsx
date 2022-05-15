import TaskActions from "./TaskActions";

export default function Task(props) {
  return (
    <div className="task">
      <div className="task-content">
        <span className="task-content__name">{props.task.taskName}</span>
      </div>

      <TaskActions board={props.board} list={props.list} task={props.task} />
    </div>
  );
}
