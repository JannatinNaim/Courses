function PresentStudentList(props) {
  return (
    <div className="present-students" style={{ border: "1px solid green" }}>
      <ul className="present-students-list">
        {props.students
          .filter((student) => student.isPresent === true)
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

export default PresentStudentList;
