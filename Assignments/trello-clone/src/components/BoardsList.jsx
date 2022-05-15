import { useContext } from "react";
import { Link } from "react-router-dom";
import { BoardsContext } from "../contexts/BoardsContext";
import BoardPreview from "./BoardPreview";

const BoardsList = () => {
  const { boards } = useContext(BoardsContext);

  return (
    <ul className="board-preview-list">
      {boards.map((board) => {
        return (
          <li className="board-preview-list__item" key={board.boardID}>
            <Link className="board-preview-list__item__link" to={"/" + board.boardID}>
              <BoardPreview board={board} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BoardsList;
