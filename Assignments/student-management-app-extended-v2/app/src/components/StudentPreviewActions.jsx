import { useEffect, useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

function StudentPreviewActions({ id }) {
  const { students, setStudent, setEditMode, fetchStudents } = useContext(StudentContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchStudents, []);

  function presentStudent() {
    let bufferStudent = students.find((studentItem) => studentItem.id === parseInt(id));

    if (bufferStudent.isPresent === true) return alert("Student is already in the present list.");
    if (bufferStudent.isPresent === false) return alert("Student is in the absent list.");

    bufferStudent.isPresent = true;

    fetch("http://localhost:3000/students/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bufferStudent),
    }).then(fetchStudents);
  }

  function absentStudent() {
    let bufferStudent = students.find((studentItem) => studentItem.id === parseInt(id));

    if (bufferStudent.isPresent === false) return alert("Student is already in the absent list.");
    if (bufferStudent.isPresent === true) return alert("Student is in the present list.");

    bufferStudent.isPresent = false;

    fetch("http://localhost:3000/students/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bufferStudent),
    }).then(fetchStudents);
  }

  function editStudent() {
    const bufferStudent = students.find((studentItem) => studentItem.id === id);

    setStudent(bufferStudent);
    setEditMode(true);
  }

  function deleteStudent() {
    fetch("http://localhost:3000/students/" + id, {
      method: "DELETE",
    }).then(fetchStudents);
  }

  return (
    <div className="student-preview__actions">
      <button className="student-preview__actions__present" onClick={presentStudent}>
        Present
      </button>
      <button className="student-preview__actions__absent" onClick={absentStudent}>
        Absent
      </button>
      <button className="student-preview__actions__edit" onClick={editStudent}>
        Edit
      </button>
      <button className="student-preview__actions__delete" onClick={deleteStudent}>
        Delete
      </button>
    </div>
  );
}

export default StudentPreviewActions;
