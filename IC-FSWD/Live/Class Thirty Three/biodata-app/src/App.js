import "./App.css";
import BioData from "./components/BioData";

function App() {
  return (
    <div className="App">
      <BioData
        name="Jannatin Naim"
        email="contact.jannatinnaim@gmail.com"
        phone="+8801800000000"
        skills={["HTML", "CSS", "JavaScript"]}
        interests={["IDK"]}
        referencedBy="MMR Ahmad"
      />

      <BioData
        name="Tanvir Rayhan"
        email="tanvirrayhan@gmail.com"
        phone="+8801800000000"
        skills={["Hecking"]}
        interests={["Hecking", "Moar Hecking"]}
        referencedBy="Jannatin Naim"
      />
    </div>
  );
}

export default App;
