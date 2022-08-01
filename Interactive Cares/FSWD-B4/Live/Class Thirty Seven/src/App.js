import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StudentSection from "./components/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      <Form
        studentName={studentName}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />

      <StudentSection
        studentName={studentName}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
    </div>
  );
}

export default App;
