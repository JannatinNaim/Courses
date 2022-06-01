import { Draggable } from "react-beautiful-dnd";
import TaskActions from "./TaskActions";

export default function Task(props) {
  return (
    <Draggable draggableId={props.task.taskID + ""} index={props.index}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="task">
            <div className="task-content">
              <span className="task-content__name">{props.task.taskName}</span>
            </div>

            <TaskActions board={props.board} list={props.list} task={props.task} />
          </div>
        );
      }}
    </Draggable>
  );
}
