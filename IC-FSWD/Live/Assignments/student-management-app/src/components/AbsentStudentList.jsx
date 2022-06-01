function AbsentStudentList({ allStudents, studentAttendanceToggleHandler }) {
  return (
    <div className="absent-student-list">
      <h2 className="absent-student-list__name">Absent Students</h2>

      <ul>
        {allStudents.map((student, index) => {
          if (!(student.isPresent !== null && !student.isPresent)) return "";

          return (
            <li className="present-student-list__list__item" key={index}>
              <span className="present-student-list__list__item__name">{student.name}</span>

              <div className="present-student-list__list__item__actions">
                <button className="accidentally-added" onClick={() => studentAttendanceToggleHandler(student.id)}>
                  Accidentally Added
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AbsentStudentList;
