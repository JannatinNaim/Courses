function StudentPreviewPresentOrAbsent(props) {
  const { id, students, fetchStudents } = props;

  function toggleStudentPresentOrAbsent() {
    let bufferStudent = students.find((studentItem) => studentItem.id === id);
    bufferStudent.isPresent = !bufferStudent.isPresent;

    fetch("http://localhost:3000/students/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bufferStudent),
    }).then(fetchStudents);
  }

  return (
    <li className="student-preview-present-or-absent">
      <div className="student-preview-present-or-absent__content">
        <span>Name: {props.name}</span>
        <span>Class: {props.class}</span>
      </div>

      <div className="student-preview-present-or-absent__actions">
        <button className="student-preview-present-or-absent__actions__toggle" onClick={toggleStudentPresentOrAbsent}>
          Accidentally Added
        </button>
      </div>
    </li>
  );
}

export default StudentPreviewPresentOrAbsent;
