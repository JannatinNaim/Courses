import { Link } from "react-router-dom";

function StudentPreview(props) {
  const { id, students, setStudent, setEditMode, fetchStudents } = props;

  function presentStudent() {
    let bufferStudent = students.find((studentItem) => studentItem.id === id);

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
    let bufferStudent = students.find((studentItem) => studentItem.id === id);

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
    <li className="student-preview">
      <Link to={"/student/" + id} className="student-preview__link">
        <div className="student-preview__content">
          <span>Name: {props.name}</span>
          <span>Class: {props.class}</span>
          <span>Roll: {props.roll}</span>
          <span>Section: {props.section}</span>
        </div>
      </Link>

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
    </li>
  );
}

export default StudentPreview;
