const counterReducer = (counter, { type, offset }) => {
  switch (type) {
    case "increment":
      return counter + offset;
    case "decrement":
      return counter - offset;
    default:
      return counter;
  }
};

export default counterReducer;
