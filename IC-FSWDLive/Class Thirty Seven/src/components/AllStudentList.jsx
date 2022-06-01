function AllStudentList(props) {
  const editStudentHandler = (studentId) => {
    const toBeEditedStudent = props.students.find((student) => student.id === studentId);

    props.setEditMode(true);
    props.setEditableStudent(toBeEditedStudent);

    props.setStudentName(toBeEditedStudent.name);
  };

  const deleteStudentHandler = (studentId) => {
    props.setStudents(props.students.filter((student) => student.id !== studentId));
  };

  const presentStudentHandler = (studentId) => {
    const bufferStudent = props.students.find((student) => student.id === studentId);

    if (bufferStudent.isPresent === true) return alert("The student is already present.");
    else if (bufferStudent.isPresent === false) return alert("The student is in the absent list.");

    props.setStudents(
      props.students.map((student) => {
        if (student.id === bufferStudent.id) student.isPresent = true;
        return student;
      })
    );
  };

  const absentStudentHandler = (studentId) => {
    const bufferStudent = props.students.find((student) => student.id === studentId);

    if (bufferStudent.isPresent === true) return alert("The student is in the present list.");
    else if (bufferStudent.isPresent === false) return alert("The student is already absent.");

    props.setStudents(
      props.students.map((student) => {
        if (student.id === bufferStudent.id) student.isPresent = false;
        return student;
      })
    );
  };

  return (
    <div className="all-students">
      <ul className="all-students-list" style={{ border: "1px solid black" }}>
        {props.students.map((student) => (
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
  );
}

export default AllStudentList;
