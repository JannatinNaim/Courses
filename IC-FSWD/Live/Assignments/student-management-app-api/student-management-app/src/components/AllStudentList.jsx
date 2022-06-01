function AllStudentList({
  setStudentName,
  allStudents,
  setAllStudents,
  setEditMode,
  setVolatileStudent,
  fetchStudents,
}) {
  const studentPresentHandler = (studentId) => {
    const toBePresentStudent = allStudents.find((student) => student.id === studentId);

    if (toBePresentStudent.isPresent === true) return alert("Student is already present.");
    if (toBePresentStudent.isPresent === false) return alert("Student is in the absent list.");

    fetch("http://localhost:3000/students/" + studentId, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        ...toBePresentStudent,
        isPresent: true,
      }),
    }).then(() => fetchStudents());
  };

  const studentAbsentHandler = (studentId) => {
    const toBePresentStudent = allStudents.find((student) => student.id === studentId);

    if (toBePresentStudent.isPresent === true) return alert("Student is already absent.");
    if (toBePresentStudent.isPresent === false) return alert("Student is in the present list.");

    fetch("http://localhost:3000/students/" + studentId, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        ...toBePresentStudent,
        isPresent: false,
      }),
    }).then(() => fetchStudents());
  };

  const deleteStudent = (studentId) => {
    fetch("http://localhost:3000/students/" + studentId, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then(() => fetchStudents());
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
