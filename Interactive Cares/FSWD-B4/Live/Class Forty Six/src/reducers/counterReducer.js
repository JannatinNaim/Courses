export function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;

    case "DECREASE":
      return state - action.payload;

    default:
      return state;
  }
}
