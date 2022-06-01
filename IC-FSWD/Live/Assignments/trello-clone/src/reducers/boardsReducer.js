export default function boardsReducer(boards, action) {
  switch (action.type) {
    case "CREATE_BOARD":
      return [
        ...boards,
        {
          boardID: action.payload.boardID,
          boardName: action.payload.boardName,
          boardDescription: action.payload.boardDescription,
          boardListIDs: [],
          boardTaskIDs: [],
          boardCreatedAt: new Date().toLocaleDateString(),
          boardUpdatedAt: new Date().toLocaleDateString(),
        },
      ];

    case "UPDATE_BOARD":
      return boards.map((board) => {
        if (board.boardID === action.payload.boardID) {
          board.boardName = action.payload.boardName ?? board.boardName;
          board.boardDescription = action.payload.boardDescription ?? board.boardDescription;
        }
        return board;
      });

    case "DELETE_BOARD":
      return boards.filter((board) => board.boardID !== action.payload.boardID);

    case "ADD_LIST_ID":
      return boards.map((board) => {
        if (board.boardID === action.payload.boardID) {
          board.boardListIDs.push(action.payload.listID);
        }
        return board;
      });

    case "REMOVE_LIST_ID":
      return boards.map((board) => {
        if (board.boardID === action.payload.boardID) {
          board.boardListIDs = board.boardListIDs.filter((boardListID) => boardListID !== action.payload.listID);
        }
        return board;
      });

    case "ADD_TASK_ID":
      return boards.map((board) => {
        if (board.boardID === action.payload.boardID) {
          board.boardTaskIDs.push(action.payload.taskID);
        }
        return board;
      });

    case "REMOVE_TASK_ID":
      return boards.map((board) => {
        if (board.boardID === action.payload.boardID) {
          board.boardTaskIDs = board.boardTaskIDs.filter((boardTaskID) => boardTaskID !== action.payload.taskID);
        }
        return board;
      });
    case "BOARD_UPDATED":
      return boards.map((board) => {
        if (board.boardID === action.payload.boardID) {
          board.boardUpdatedAt = new Date().toLocaleDateString();
        }
        return board;
      });

    default:
      return boards;
  }
}
