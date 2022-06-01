import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function AllStudentList() {
  const { setStudentName, allStudents, setAllStudents, setEditMode, setVolatileStudent } = useContext(StudentContext);

  const studentPresentHandler = (studentId) => {
    const bufferStudent = allStudents.find((student) => student.id === studentId);

    if (bufferStudent.isPresent === true) return alert("Student is already present.");
    if (bufferStudent.isPresent === false) return alert("Student is in the absent list.");

    setAllStudents(
      allStudents.map((student) => {
        if (student.id === studentId) student.isPresent = true;
        return student;
      })
    );
  };

  const studentAbsentHandler = (studentId) => {
    const bufferStudent = allStudents.find((student) => student.id === studentId);

    if (bufferStudent.isPresent === true) return alert("Student is already absent.");
    if (bufferStudent.isPresent === false) return alert("Student is in the present list.");

    setAllStudents(
      allStudents.map((student) => {
        if (student.id === studentId) student.isPresent = false;
        return student;
      })
    );
  };

  const deleteStudent = (studentId) => {
    setAllStudents(allStudents.filter((student) => student.id !== studentId));
  };

  const editStudent = (studentId) => {
    const bufferStudent = allStudents.find((student) => student.id === studentId);

    setEditMode(true);
    setStudentName(bufferStudent.name);
    setVolatileStudent(bufferStudent);
  };

  return (
    <div className="all-student-list">
      <h2 className="all-student-list__name">All Students</h2>

      <ul className="all-student-list__list">
        {allStudents.map((student, index) => (
          <li className="all-student-list__list__item" key={index}>
            <span className="all-student-list__list__item__name">{student.name}</span>

            <div className="all-student-list__list__item__actions">
              <button className="present" onClick={() => studentPresentHandler(student.id)}>
                Present
              </button>

              <button className="absent" onClick={() => studentAbsentHandler(student.id)}>
                Absent
              </button>
              <button className="edit" onClick={() => editStudent(student.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => deleteStudent(student.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudentList;
