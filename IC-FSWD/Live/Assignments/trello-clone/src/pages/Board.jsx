import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { BoardsContext } from "../contexts/BoardsContext";
import { ListsContext } from "../contexts/ListsContext";
import { TasksContext } from "../contexts/TasksContext";
import BoardActions from "../components/BoardActions";
import List from "../components/List";
import ListForm from "../components/ListForm";

const Board = () => {
  const URLParams = useParams();
  const { boards } = useContext(BoardsContext);
  const { lists, dispatchListsAction } = useContext(ListsContext);
  const { dispatchTasksAction } = useContext(TasksContext);
  const board = boards.find((board) => board.boardID === parseInt(URLParams.boardID));

  const taskDragEndHandler = (result) => {
    if (!result.destination) return;

    const currentListID = parseInt(result.source.droppableId);
    const currentIndex = result.source.index;

    const updatedListID = parseInt(result.destination.droppableId);
    const updatedIndex = result.destination.index;

    const taskID = parseInt(result.draggableId);

    if (currentListID === updatedListID && currentIndex !== updatedIndex) {
      dispatchListsAction({
        type: "SORT_LIST",
        payload: {
          listID: updatedListID,
          taskID,
          currentIndex,
          updatedIndex,
        },
      });

      return;
    }

    if (currentListID !== updatedListID) {
      dispatchTasksAction({
        type: "UPDATE_LIST_ID",
        payload: {
          taskID,
          listID: updatedListID,
        },
      });

      dispatchListsAction({
        type: "ADD_TASK_ID",
        payload: {
          listID: updatedListID,
          taskID,
        },
      });

      dispatchListsAction({
        type: "REMOVE_TASK_ID",
        payload: {
          listID: currentListID,
          taskID,
        },
      });

      // dispatchListsAction({
      //   type: "SORT_LIST",
      //   payload: {
      //     listID: updatedListID,
      //     taskID,
      //     currentIndex,
      //     updatedIndex,
      //   },
      // });
    }
  };

  return (
    <div className="board-page">
      <span className="board-page__name">{board?.boardName}</span>

      <div className="board-page__info">
        <span className="board-page__description">Description: {board?.boardDescription}</span>

        <BoardActions board={board} />
      </div>

      <DragDropContext onDragEnd={taskDragEndHandler}>
        <div className="lists-container">
          {lists
            .filter((list) => list.listBoardID === board?.boardID)
            .map((list) => (
              <List key={list.listID} board={board} list={list} />
            ))}

          <ListForm board={board} />
        </div>
      </DragDropContext>

      <Link className="back-to-home" to="/">
        Back To Home
      </Link>
    </div>
  );
};

export default Board;
