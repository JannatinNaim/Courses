import "./App.scss";
import BioData from "./components/BioData.jsx";

function App() {
  return (
    <div className="app">
      <h1 className="app__name">Bio Data</h1>
      <p className="app__info">Get to know everyone around here.</p>

      <div className="bio-data-grid">
        <BioData
          name="Jannatin Naim"
          age={17}
          gender="Male"
          phone="+8801234567890"
          email="mail@example.com"
          hobbies={["Coding", "Listening to Music"]}
          interests={["Web Development", "Movies"]}
        />

        <BioData name="Nushrat Jahan" age={11} gender="Female" />

        <BioData
          name="Morzina Khatun"
          age={36}
          gender="Female"
          phone="+8801234567890"
          interests={["News", "Food Items"]}
        />

        <BioData
          name="Khorshed Alam"
          age={40}
          gender="Male"
          phone="+8801234567890"
          interests={["Motor Bikes", "Mobile Phone"]}
        />
      </div>
    </div>
  );
}

export default App;
