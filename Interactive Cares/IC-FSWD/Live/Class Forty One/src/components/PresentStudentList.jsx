import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function PresentStudentList({ studentAttendanceToggleHandler }) {
  const { allStudents } = useContext(StudentContext);

  return (
    <div className="present-student-list">
      <h2 className="present-student-list__name">Present Students</h2>

      <ul>
        {allStudents.map((student, index) => {
          if (!(student.isPresent !== null && student.isPresent)) return "";

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

export default PresentStudentList;
