export function themeReducer(state = 'black', action) {
  switch (action.payload) {
    case "CHANGE_TO_RED":
      return "red";
    case "CHANGE_TO_GREEN":
      return "green";
    case "CHANGE_TO_BLUE":
      return "blue";
    default:
      return state;
  }
}
