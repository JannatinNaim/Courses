import { useState, useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { BoardsContext } from "../contexts/BoardsContext";
import { ListsContext } from "../contexts/ListsContext";

export default function TaskForm(props) {
  const { dispatchTasksAction } = useContext(TasksContext);
  const { dispatchBoardsAction } = useContext(BoardsContext);
  const { dispatchListsAction } = useContext(ListsContext);
  const [taskName, setTaskName] = useState("");

  const taskFormSubmitHandler = (e) => {
    e.preventDefault();

    const taskID = Math.floor(Math.random() * (99999999 - 11111111 + 1)) + 11111111;

    dispatchTasksAction({
      type: "CREATE_TASK",
      payload: {
        taskID,
        taskName,
        taskBoardID: props.board.boardID,
        taskListID: props.list.listID,
      },
    });

    dispatchBoardsAction({
      type: "ADD_TASK_ID",
      payload: {
        taskID,
        boardID: props.board.boardID,
      },
    });

    dispatchListsAction({
      type: "ADD_TASK_ID",
      payload: {
        taskID,
        listID: props.list.listID,
      },
    });

    setTaskName("");
  };

  return (
    <form className="task-form" onSubmit={(e) => taskFormSubmitHandler(e)}>
      <input
        className="task-form__name"
        required
        type="text"
        placeholder="Task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <button type="submit" className="task-form__submit">
        Add Task
      </button>
    </form>
  );
}
