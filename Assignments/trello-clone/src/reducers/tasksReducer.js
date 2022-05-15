export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "CREATE_TASK":
      return [
        ...tasks,
        {
          taskID: action.payload.taskID,
          taskName: action.payload.taskName,
          taskBoardID: action.payload.taskBoardID,
          taskListID: action.payload.taskListID,
        },
      ];

    case "UPDATE_TASK":
      return tasks.map((task) => {
        if (task.taskID === action.payload.taskID) {
          task.taskName = action.payload.taskName ?? task.taskName;
        }
        return task;
      });

    case "DELETE_TASK":
      return tasks.filter((task) => task.taskID !== action.payload.taskID);

    case "UPDATE_BOARD_ID":
      return tasks.map((task) => {
        if (task.taskID === action.payload.taskID) {
          task.taskBoardID = action.payload.boardID;
        }
        return task;
      });

    case "UPDATE_LIST_ID":
      return tasks.map((task) => {
        if (task.taskID === action.payload.taskID) {
          task.taskListID = action.payload.listID;
        }
        return task;
      });

    default:
      return tasks;
  }
}
