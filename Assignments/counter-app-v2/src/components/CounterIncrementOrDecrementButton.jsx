function CounterIncrementOrDecrementButton(props) {
  const { buttonName, offset, action } = props;

  return (
    <button onClick={action}>
      {buttonName} by {offset}
    </button>
  );
}

export default CounterIncrementOrDecrementButton;
