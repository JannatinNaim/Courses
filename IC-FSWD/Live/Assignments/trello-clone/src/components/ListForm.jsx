import { useState, useContext } from "react";
import { ListsContext } from "../contexts/ListsContext";
import { BoardsContext } from "../contexts/BoardsContext";

const ListForm = (props) => {
  const { dispatchListsAction } = useContext(ListsContext);
  const { dispatchBoardsAction } = useContext(BoardsContext);
  const [listName, setListName] = useState("");

  const listFormSubmitHandler = (e) => {
    e.preventDefault();

    const listID = Math.floor(Math.random() * (99999999 - 11111111 + 1)) + 11111111;

    dispatchListsAction({
      type: "CREATE_LIST",
      payload: {
        listID,
        listName,
        listBoardID: props.board.boardID,
      },
    });

    dispatchBoardsAction({
      type: "ADD_LIST_ID",
      payload: {
        boardID: props.board.boardID,
        listID,
      },
    });

    setListName("");
  };

  return (
    <form className="list-form" onSubmit={(e) => listFormSubmitHandler(e)}>
      <input
        className="list-form__name"
        required
        type="text"
        placeholder="List Name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />

      <button type="submit" className="list-form__submit">
        Add List
      </button>
    </form>
  );
};

export default ListForm;
