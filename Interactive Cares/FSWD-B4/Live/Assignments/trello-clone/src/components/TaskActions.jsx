import { useState, useContext } from "react";
import { ListsContext } from "../contexts/ListsContext";
import { BoardsContext } from "../contexts/BoardsContext";
import { TasksContext } from "../contexts/TasksContext";

export default function TaskActions(props) {
  const { lists, dispatchListsAction } = useContext(ListsContext);
  const { boards, dispatchBoardsAction } = useContext(BoardsContext);
  const { tasks, dispatchTasksAction } = useContext(TasksContext);
  const [taskName, setTaskName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [copyMode, setCopyMode] = useState(false);
  const [moveMode, setMoveMode] = useState(false);
  const [destinationBoardID, setDestinationBoardID] = useState("none");
  const [destinationListID, setDestinationListID] = useState("none");

  const taskRename = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatchListsAction({
        type: "UPDATE_TASK",
        payload: {
          taskID: props.task.taskID,
          taskName,
        },
      });

      setEditMode(false);
      setTaskName("");
      return;
    }

    setEditMode(true);
    setTaskName(props.task.taskName);
  };

  const taskDelete = () => {
    dispatchBoardsAction({
      type: "REMOVE_TASK_ID",
      payload: {
        boardID: props.board.boardID,
        taskID: props.task.taskID,
      },
    });

    dispatchListsAction({
      type: "REMOVE_TASK_ID",
      payload: {
        listID: props.list.listID,
        taskID: props.task.taskID,
      },
    });

    dispatchTasksAction({
      type: "DELETE_TASK",
      payload: {
        taskID: props.task.taskID,
      },
    });
  };

  const taskMove = (e) => {
    e.preventDefault();

    if (moveMode) {
      if (destinationBoardID === "none") return setMoveMode(false);

      if (destinationListID === "none") return setMoveMode(false);
      if (destinationListID === props.list.listID) return setMoveMode(false);

      dispatchTasksAction({
        type: "UPDATE_BOARD_ID",
        payload: {
          taskID: props.task.taskID,
          boardID: destinationBoardID,
        },
      });

      dispatchTasksAction({
        type: "UPDATE_LIST_ID",
        payload: {
          taskID: props.task.taskID,
          listID: destinationListID,
        },
      });

      dispatchListsAction({
        type: "ADD_TASK_ID",
        payload: {
          listID: destinationListID,
          taskID: props.task.taskID,
        },
      });

      dispatchListsAction({
        type: "REMOVE_TASK_ID",
        payload: {
          listID: props.list.listID,
          taskID: props.task.taskID,
        },
      });

      if (props.board.boardID !== destinationBoardID) {
        dispatchBoardsAction({
          type: "ADD_TASK_ID",
          payload: {
            boardID: destinationBoardID,
            taskID: props.task.taskID,
          },
        });

        dispatchBoardsAction({
          type: "REMOVE_TASK_ID",
          payload: {
            boardID: props.board.boardID,
            taskID: props.task.taskID,
          },
        });
      }
      setMoveMode(false);
      return;
    }

    setMoveMode(true);
  };

  const taskCopy = (e) => {
    e.preventDefault();

    if (copyMode) {
      if (destinationBoardID === "none") return setMoveMode(false);
      if (destinationListID === "none") return setMoveMode(false);

      const taskID = Math.floor(Math.random() * (99999999 - 11111111 + 1)) + 11111111;

      dispatchTasksAction({
        type: "CREATE_TASK",
        payload: {
          taskID,
          taskName: tasks.find(task => task.taskID === props.task.taskID).taskName,
          taskBoardID: destinationBoardID,
          taskListID: destinationListID,
        }
      })

      dispatchListsAction({
        type: "ADD_TASK_ID",
        payload: {
          listID: destinationListID,
          taskID,
        }
      })

      dispatchBoardsAction({
        type: "ADD_TASK_ID",
        payload: {
          boardID: destinationBoardID,
          taskID,
        }
      })

      setCopyMode(false);
      return;
    }

    setCopyMode(true);
  };

  return (
    <div className="task-actions">
      <form className="task-actions__form" onSubmit={(e) => taskRename(e)}>
        {editMode && (
          <input
            className="task-actions__form__name"
            type="text"
            placeholder="List Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        )}

        <button className="task-actions__form__submit">{!editMode ? "Edit" : "Update"}</button>
      </form>

      <form className="task-actions__copy" onSubmit={(e) => taskCopy(e)}>
        {copyMode && !moveMode && (
          <div className="task-actions__copy__options">
            <select value={destinationBoardID} onChange={(e) => setDestinationBoardID(parseInt(e.target.value))}>
              <option key="none" value="none">
                Select Board
              </option>

              {boards.map((board) => (
                <option key={board.boardID} value={board.boardID}>
                  {board.boardName}
                </option>
              ))}
            </select>

            <select value={destinationListID} onChange={(e) => setDestinationListID(parseInt(e.target.value))}>
              <option key="none" value="none">
                Select List
              </option>

              {lists.map((list) => {
                if (list.listBoardID === destinationBoardID) {
                  return (
                    <option key={list.listID} value={list.listID}>
                      {list.listName}
                    </option>
                  );
                }

                return "";
              })}
            </select>
          </div>
        )}

        <button className="task-actions__copy__submit">
          Copy
        </button>
      </form>

      <form className="task-actions__move" onSubmit={(e) => taskMove(e)}>
        {moveMode && !copyMode && (
          <div className="task-actions__move__options">
            <select value={destinationBoardID} onChange={(e) => setDestinationBoardID(parseInt(e.target.value))}>
              <option key="none" value="none">
                Select Board
              </option>

              {boards.map((board) => (
                <option key={board.boardID} value={board.boardID}>
                  {board.boardName}
                </option>
              ))}
            </select>

            <select value={destinationListID} onChange={(e) => setDestinationListID(parseInt(e.target.value))}>
              <option key="none" value="none">
                Select List
              </option>

              {lists.map((list) => {
                if (list.listBoardID === destinationBoardID) {
                  return (
                    <option key={list.listID} value={list.listID}>
                      {list.listName}
                    </option>
                  );
                }

                return "";
              })}
            </select>
          </div>
        )}

        <button className="task-actions__move__submit">
          Move
        </button>
      </form>

      <button className="task-actions__delete" onClick={taskDelete}>
        Delete
      </button>
    </div>
  );
}
