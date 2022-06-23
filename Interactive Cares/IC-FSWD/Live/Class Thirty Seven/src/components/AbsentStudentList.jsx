function AbsentStudentList(props) {
  return (
    <div className="absent-students" style={{ border: "1px solid red" }}>
      <ul className="absent-students-list">
        {props.students
          .filter((student) => student.isPresent === false)
          .map((student) => (
            <li className="student">
              <span className="student-name">{student.name}</span>

              <button
                className="student-accidentally-added-button"
                onClick={() => props.studentAttendanceToggleHandler(student.id)}
              >
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AbsentStudentList;
