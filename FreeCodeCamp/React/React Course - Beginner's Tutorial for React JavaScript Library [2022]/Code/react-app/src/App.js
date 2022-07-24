import "./App.css";

import Joke from "./components/Joke";
import jokes from "./data/jokes";

function App() {
  return (
    <div className="app">
      {jokes.map((joke) => {
        const { setup, punchline } = joke;

        return <Joke setup={setup} punchline={punchline} />;
      })}
    </div>
  );
}

export default App;
