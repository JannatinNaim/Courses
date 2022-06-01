import { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import ListActions from "./ListActions";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { TasksContext } from "../contexts/TasksContext";

export default function List(props) {
  const { tasks } = useContext(TasksContext);

  return (
    <Droppable droppableId={props.list.listID + ""}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps} className="list">
            <div className="list__info">
              <span className="list__info__name">{props.list.listName}</span>

              <ListActions board={props.board} list={props.list} />
            </div>

            <TaskForm board={props.board} list={props.list} />

            {props.list.listTaskIDs.map((taskID, index) => {
              const task = tasks.find((task) => task.taskID === taskID);
              if (!task) return "";

              return <Task key={task.taskID} board={props.board} list={props.list} task={task} index={index} />;
            })}

            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}
