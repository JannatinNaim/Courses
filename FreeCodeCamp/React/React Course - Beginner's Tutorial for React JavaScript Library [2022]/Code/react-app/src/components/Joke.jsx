const Joke = (props) => {
  const { setup, punchline } = props;

  return (
    <div className="joke">
      {setup && <h3 className="setup">{setup}</h3>}
      {punchline && <p className="punchline">{punchline}</p>}
    </div>
  );
};

export default Joke;
