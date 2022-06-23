import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const createStudentHandler = () => {
    if (studentName === "") return alert("Enter a valid student name.");

    const student = {
      id: Date.now(),
      name: studentName,
      isPresent: null,
    };

    setStudents([...students, student]);
    setStudentName("");
  };

  const editStudentHandler = (studentId) => {
    const toBeEditedStudent = students.find((student) => student.id === studentId);

    setEditMode(true);
    setEditableStudent(toBeEditedStudent);

    setStudentName(toBeEditedStudent.name);
  };

  const deleteStudentHandler = (studentId) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  const updateStudentHandler = () => {
    setStudents(
      students.map((student) => {
        if (student.id === editableStudent.id) student.name = studentName;
        return student;
      })
    );

    setEditMode(false);
    setEditableStudent(null);

    setStudentName("");
  };

  const presentStudentHandler = (studentId) => {
    const bufferStudent = students.find((student) => student.id === studentId);

    if (bufferStudent.isPresent === true) return alert("The student is already present.");
    else if (bufferStudent.isPresent === false) return alert("The student is in the absent list.");

    setStudents(
      students.map((student) => {
        if (student.id === bufferStudent.id) student.isPresent = true;
        return student;
      })
    );
  };

  const absentStudentHandler = (studentId) => {
    const bufferStudent = students.find((student) => student.id === studentId);

    if (bufferStudent.isPresent === true) return alert("The student is in the present list.");
    else if (bufferStudent.isPresent === false) return alert("The student is already absent.");

    setStudents(
      students.map((student) => {
        if (student.id === bufferStudent.id) student.isPresent = false;
        return student;
      })
    );
  };

  const studentAttendanceToggleHandler = (studentId) => {
    const bufferStudent = students.find((student) => student.id === studentId);

    setStudents(
      students.map((student) => {
        if (student.id === bufferStudent.id) student.isPresent = !student.isPresent;
        return student;
      })
    );
  };

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          editMode ? updateStudentHandler() : createStudentHandler();
        }}
      >
        <input
          type="text"
          placeholder="Student Name..."
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
        />

        <button type="submit">{editMode ? "Edit" : "Add"} Student</button>
      </form>

      <div
        className="students-section"
        style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}
      >
        <div className="all-students">
          <ul className="all-students-list" style={{ border: "1px solid black" }}>
            {students.map((student) => (
              <li className="student">
                <span className="student-name">{student.name}</span>
                <button className="student-edit-button" onClick={() => editStudentHandler(student.id)}>
                  Edit
                </button>

                <button className="student-delete-button" onClick={() => deleteStudentHandler(student.id)}>
                  Delete
                </button>

                <button className="student-present-button" onClick={() => presentStudentHandler(student.id)}>
                  Present
                </button>

                <button className="student-absent-button" onClick={() => absentStudentHandler(student.id)}>
                  Absent
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="present-students" style={{ border: "1px solid green" }}>
          <ul className="present-students-list">
            {students
              .filter((student) => student.isPresent === true)
              .map((student) => (
                <li className="student">
                  <span className="student-name">{student.name}</span>

                  <button
                    className="student-accidentally-added-button"
                    onClick={() => studentAttendanceToggleHandler(student.id)}
                  >
                    Accidentally Added
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="absent-students" style={{ border: "1px solid red" }}>
          {students
            .filter((student) => student.isPresent === false)
            .map((student) => (
              <li className="student">
                <span className="student-name">{student.name}</span>

                <button
                  className="student-accidentally-added-button"
                  onClick={() => studentAttendanceToggleHandler(student.id)}
                >
                  Accidentally Added
                </button>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
