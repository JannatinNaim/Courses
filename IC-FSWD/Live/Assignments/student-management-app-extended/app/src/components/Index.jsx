import { useState, useEffect } from "react";
import AbsentStudents from "./AbsentStudents";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";
import StudentForm from "./StudentForm";

function Index() {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    class: "",
    section: "",
    description: "",
    isPresent: null,
  });
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);

  function fetchStudents() {
    fetch("http://localhost:3000/students/")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }

  useEffect(fetchStudents, []);

  return (
    <div className="main">
      <h1 className="main__name">Student Management App</h1>

      <StudentForm
        student={student}
        setStudent={setStudent}
        editMode={editMode}
        setEditMode={setEditMode}
        fetchStudents={fetchStudents}
      />

      <div className="students-list">
        <AllStudents
          setStudent={setStudent}
          students={students}
          setEditMode={setEditMode}
          fetchStudents={fetchStudents}
        />

        <PresentStudents students={students} fetchStudents={fetchStudents} />

        <AbsentStudents students={students} fetchStudents={fetchStudents} />
      </div>
    </div>
  );
}

export default Index;
