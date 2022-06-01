import "./App.scss";
import StudentInputForm from "./components/StudentInputForm";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="app">
      <h1 className="app__name">Student Management App</h1>

      <StudentInputForm />

      <StudentList />
    </div>
  );
}

export default App;
