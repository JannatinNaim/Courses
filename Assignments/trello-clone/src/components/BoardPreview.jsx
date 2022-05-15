const BoardPreview = (props) => {
  return (
    <div className="board-preview">
      <span className="board-preview__name">{props.board.boardName}</span>

      <div className="board-preview__info">
        <span className="board-preview__lists">Lists {props.board.boardListIDs.length}</span>
        <span className="board-preview__tasks">Tasks {props.board.boardTaskIDs.length}</span>
        <span className="board-preview__created-at">Created At {props.board.boardCreatedAt}</span>
        <span className="board-preview__updated-at">Updated At {props.board.boardUpdatedAt}</span>
      </div>
    </div>
  );
};

export default BoardPreview;
