import "./App.css";
import BioData from "./components/BioData";

function App() {
  return (
    <div className="App">
      <BioData
        name="Jannatin Naim"
        email="contact.jannatinnaim@gmail.com"
        phone="+8801874310011"
        linkedInUrl="jannatin-naim"
        githubUrl="JannatinNaim"
        twitterUrl="Jannatin__Naim"
        skills={["HTML", "CSS", "JavaScript", "React", "Node"]}
        interests={["IDK"]}
      />

      <hr />

      <BioData
        name="Tanvir Rayhan"
        email="tanvirrayhan@gmail.com"
        phone="+8801000000000"
        linkedInUrl="tanvirrayhan"
        githubUrl="tanvirrayhan"
        twitterUrl="tanvirrayhan"
        skills={["Hecking Stuff"]}
        interests={["Moar Hecking"]}
      />
    </div>
  );
}

export default App;
