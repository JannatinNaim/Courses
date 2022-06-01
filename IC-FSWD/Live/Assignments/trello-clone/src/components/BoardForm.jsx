import { useState, useContext } from "react";
import { BoardsContext } from "../contexts/BoardsContext";

export default function BoardForm() {
  const [boardName, setBoardName] = useState("");
  const [boardDescription, setBoardDescription] = useState("");
  const { boards, dispatchBoardsAction } = useContext(BoardsContext);

  const boardFormSubmitHandler = (e) => {
    e.preventDefault();

    dispatchBoardsAction({
      type: "CREATE_BOARD",
      payload: {
        boardID: boards.length ? boards[boards.length - 1].boardID + 1 : 1,
        boardName,
        boardDescription,
      },
    });

    setBoardName("");
    setBoardDescription("");
  };

  return (
    <form className="board-form" onSubmit={(e) => boardFormSubmitHandler(e)}>
      <input
        className="board-form__name-input"
        required
        type="text"
        placeholder="Board Name"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
      />
      <input
        className="board-form__description-input"
        type="text"
        placeholder="Board Description"
        value={boardDescription}
        onChange={(e) => setBoardDescription(e.target.value)}
      />

      <button className="board-form__submit">Add Board</button>
    </form>
  );
}
