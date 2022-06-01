import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { BoardsContext } from "../contexts/BoardsContext";
import { ListsContext } from "../contexts/ListsContext";

export default function BoardActions(props) {
  const { dispatchBoardsAction } = useContext(BoardsContext);
  const { dispatchListsAction } = useContext(ListsContext);
  const [boardName, setBoardName] = useState("");
  const [boardDescription, setBoardDescription] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [boardDeleted, setBoardDeleted] = useState(false);

  const boardRename = (e) => {
    e.preventDefault();

    if (editMode) {
      setEditMode(false);
      dispatchBoardsAction({
        type: "UPDATE_BOARD",
        payload: {
          boardID: props.board.boardID,
          boardName,
          boardDescription,
        },
      });
      return;
    }

    setEditMode(true);
    setBoardName(props.board.boardName);
    setBoardDescription(props.board.boardDescription);
  };

  const boardDelete = () => {
    props.board.boardListIDs.forEach((boardListID) => {
      dispatchListsAction({
        type: "DELETE_LIST",
        payload: {
          listID: boardListID,
        },
      });
    });

    dispatchBoardsAction({
      type: "DELETE_BOARD",
      payload: {
        boardID: props.board.boardID,
      },
    });

    setBoardDeleted(true);
  };

  return (
    <div className="board-actions">
      <form onSubmit={(e) => boardRename(e)} className="board-actions__form">
        {editMode && (
          <div className="board-actions__form__inputs">
            <input
              className="board-actions__form__inputs__name"
              required
              type="text"
              placeholder="Board Name"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
            />

            <input
              className="board-actions__form__inputs__description"
              type="text"
              placeholder="Board Description"
              value={boardDescription}
              onChange={(e) => setBoardDescription(e.target.value)}
            />
          </div>
        )}
        <button type="submit" className="board-actions__form__submit">{!editMode ? "Edit" : "Update"}</button>
      </form>

      <button className="board-actions__delete" onClick={boardDelete}>Delete</button>
      {boardDeleted && <Navigate to="/" />}
    </div>
  );
}
