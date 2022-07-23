import Joke from "../components/Joke";

const App = () => {
  return (
    <div className="app">
      <Joke setup={"Joke setup for A."} punchline={"Punchline for A."} />
      <Joke setup={"Setup for B."} punchline={"Punchline for B."} />
      <Joke punchline={"Only punchline for C."} />
    </div>
  );
};

export default App;
