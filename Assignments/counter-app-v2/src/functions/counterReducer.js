function counterReducer(counterState, action) {
  const { actionName, offset } = action;

  switch (actionName) {
    case "increment":
      return counterState + offset;
    case "decrement":
      return counterState - offset;
    default:
      return counterState;
  }
}

export default counterReducer;
