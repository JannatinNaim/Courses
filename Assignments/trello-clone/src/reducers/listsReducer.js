export default function listsReducer(lists, action) {
  switch (action.type) {
    case "CREATE_LIST":
      return [
        ...lists,
        {
          listID: action.payload.listID,
          listName: action.payload.listName,
          listBoardID: action.payload.listBoardID,
          listTaskIDs: [],
        },
      ];

    case "UPDATE_LIST":
      return lists.map((list) => {
        if (list.listID === action.payload.listID) {
          list.listName = action.payload.listName ?? list.listName;
        }
        return list;
      });

    case "DELETE_LIST":
      return lists.filter((list) => list.listID !== action.payload.listID);

    case "UPDATE_LIST_BOARD_ID":
      return lists.map((list) => {
        if (list.listID === action.payload.listID) {
          list.listBoardID = action.payload.boardID;
        }
        return list;
      });

    case "ADD_TASK_ID":
      return lists.map((list) => {
        if (list.listID === action.payload.listID) {
          list.listTaskIDs.push(action.payload.taskID);
        }
        return list;
      });

    case "REMOVE_TASK_ID":
      return lists.map((list) => {
        if (list.listID === action.payload.listID) {
          list.listTaskIDs = list.listTaskIDs.filter((listTaskID) => listTaskID !== action.payload.taskID);
        }
        return list;
      });

    default:
      return lists;
  }
}
