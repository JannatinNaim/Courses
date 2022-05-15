import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BoardsContext } from "../contexts/BoardsContext";
import { ListsContext } from "../contexts/ListsContext";
import BoardActions from "../components/BoardActions";
import List from "../components/List";
import ListForm from "../components/ListForm";

const Board = () => {
  const URLParams = useParams();
  const { boards } = useContext(BoardsContext);
  const { lists } = useContext(ListsContext);
  const board = boards.find((board) => board.boardID === parseInt(URLParams.boardID));

  return (
    <div className="board-page">
      <span className="board-page__name">{board?.boardName}</span>

      <div className="board-page__info">
        <span className="board-page__description">Description: {board?.boardDescription}</span>

        <BoardActions board={board} />
      </div>

      <div className="lists-container">
        {lists
          ?.filter((list) => list.listBoardID === board?.boardID)
          ?.map((list) => (
            <List key={list.listID} board={board} list={list} />
          ))}

        <ListForm board={board} />
      </div>

      <Link className="back-to-home" to="/">Back To Home</Link>
    </div>
  );
};

export default Board;
