import { useState, useContext } from "react";
import { ListsContext } from "../contexts/ListsContext";
import { BoardsContext } from "../contexts/BoardsContext";
import { TasksContext } from "../contexts/TasksContext";

export default function ListActions(props) {
  const { dispatchListsAction } = useContext(ListsContext);
  const { boards, dispatchBoardsAction } = useContext(BoardsContext);
  const { tasks, dispatchTasksAction } = useContext(TasksContext);
  const [listName, setListName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [copyMode, setCopyMode] = useState(false);
  const [moveMode, setMoveMode] = useState(false);
  const [destinationBoardID, setDestinationBoardID] = useState("none");

  const listRename = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatchListsAction({
        type: "UPDATE_LIST",
        payload: {
          listID: props.list.listID,
          listName,
        },
      });
      setEditMode(false);
      setListName("");
      return;
    }

    setEditMode(true);
    setListName(props.list.listName);
  };

  const listDelete = () => {
    dispatchBoardsAction({
      type: "REMOVE_LIST_ID",
      payload: {
        boardID: props.board.boardID,
        listID: props.list.listID,
      },
    });

    props.list.listTaskIDs.forEach((listTaskID) => {
      dispatchBoardsAction({
        type: "REMOVE_TASK_ID",
        payload: {
          boardID: props.board.boardID,
          listID: listTaskID,
        },
      });

      dispatchTasksAction({
        type: "DELETE_TASK",
        payload: {
          taskID: listTaskID,
        },
      });
    });

    dispatchListsAction({
      type: "DELETE_LIST",
      payload: {
        listID: props.list.listID,
      },
    });
  };

  const listMove = (e) => {
    e.preventDefault();
    setCopyMode(false);

    if (moveMode) {
      if (destinationBoardID === "none") return setMoveMode(false);
      if (destinationBoardID === props.board.boardID) return setMoveMode(false);

      props.list.listTaskIDs.forEach((taskID) => {
        dispatchTasksAction({
          type: "UPDATE_BOARD_ID",
          payload: {
            taskID,
            boardID: destinationBoardID,
          },
        });

        dispatchBoardsAction({
          type: "REMOVE_TASK_ID",
          payload: {
            boardID: props.board.boardID,
            taskID,
          },
        });

        dispatchBoardsAction({
          type: "ADD_TASK_ID",
          payload: {
            boardID: destinationBoardID,
            taskID,
          },
        });
      });

      dispatchListsAction({
        type: "UPDATE_LIST_BOARD_ID",
        payload: {
          listID: props.list.listID,
          boardID: destinationBoardID,
        },
      });

      dispatchBoardsAction({
        type: "ADD_LIST_ID",
        payload: {
          boardID: destinationBoardID,
          listID: props.list.listID,
        },
      });

      dispatchBoardsAction({
        type: "REMOVE_LIST_ID",
        payload: {
          boardID: props.board.boardID,
          listID: props.list.listID,
        },
      });

      setMoveMode(false);
      return;
    }

    setMoveMode(true);
  };

  const listCopy = (e) => {
    e.preventDefault();
    setMoveMode(false);

    if (copyMode) {
      if (destinationBoardID === "none") return setCopyMode(false);

      const listID = Math.floor(Math.random() * (99999999 - 11111111 + 1)) + 11111111;

      dispatchListsAction({
        type: "CREATE_LIST",
        payload: {
          listID,
          listName: props.list.listName,
          listBoardID: destinationBoardID,
        },
      });

      props.list.listTaskIDs.forEach((listTaskID) => {
        const taskID = Math.floor(Math.random() * (99999999 - 11111111 + 1)) + 11111111;

        dispatchTasksAction({
          type: "CREATE_TASK",
          payload: {
            taskID,
            taskName: tasks.find((task) => task.taskID === listTaskID).taskName,
            taskBoardID: destinationBoardID,
            taskListID: listID,
          },
        });

        dispatchListsAction({
          type: "ADD_TASK_ID",
          payload: {
            listID,
            taskID
          }
        })

        dispatchBoardsAction({
          type: "ADD_LIST_ID",
          payload: {
            boardID: destinationBoardID,
            listID,
          }
        })

        dispatchBoardsAction({
          type: "ADD_TASK_ID",
          payload: {
            boardID: destinationBoardID,
            taskID
          }
        })
      });

      setCopyMode(false);
      return;
    }

    setCopyMode(true);
  };

  return (
    <div className="list-actions">
      <form onSubmit={(e) => listRename(e)} className="list-actions__form">
        {editMode && (
          <input
            className="list-actions__form__name"
            type="text"
            placeholder="List Name"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
        )}

        <button className="list-actions__form__submit">{!editMode ? "Edit" : "Update"}</button>
      </form>

      <form className="list-actions__copy" onSubmit={(e) => listCopy(e)}>
        {copyMode && !moveMode && (
          <div className="list-actions__copy__options">
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
          </div>
        )}

        <button className="list-actions__copy__submit">Copy</button>
      </form>

      <form className="list-actions__move" onSubmit={(e) => listMove(e)}>
        {moveMode && !copyMode && (
          <div className="list-actions__move__options">
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
          </div>
        )}

        <button className="list-actions__move__submit">Move</button>
      </form>

      <button className="list-actions__delete" onClick={listDelete}>
        Delete
      </button>
    </div>
  );
}
