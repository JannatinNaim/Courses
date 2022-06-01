import { useState } from "react";
import "./App.scss";
import StudentInputForm from "./components/StudentInputForm";
import StudentList from "./components/StudentList";

function App() {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [volatileStudent, setVolatileStudent] = useState(null);

  return (
    <div className="app">
      <h1 className="app__name">Student Management App</h1>

      <StudentInputForm
        studentName={studentName}
        setStudentName={setStudentName}
        allStudents={allStudents}
        setAllStudents={setAllStudents}
        editMode={editMode}
        setEditMode={setEditMode}
        volatileStudent={volatileStudent}
        setVolatileStudent={setVolatileStudent}
      />

      <StudentList
        setStudentName={setStudentName}
        allStudents={allStudents}
        setAllStudents={setAllStudents}
        setEditMode={setEditMode}
        setVolatileStudent={setVolatileStudent}
      />
    </div>
  );
}

export default App;
