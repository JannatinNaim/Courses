const Joke = (props) => {
  const { setup, punchline } = props;

  return (
    <div className="joke">
      {setup && <p className="setup">{setup}</p>}
      {punchline && <p className="punchline">{punchline}</p>}
    </div>
  );
};

export default Joke;
