import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";

function StudentList({ setStudentName, allStudents, setAllStudents, setEditMode, setVolatileStudent }) {
  const studentAttendanceToggleHandler = (studentId) => {
    setAllStudents(
      allStudents.map((student) => {
        if (student.id === studentId) student.isPresent = !student.isPresent;
        return student;
      })
    );
  };

  return (
    <div className="student-list">
      <AllStudentList
        setStudentName={setStudentName}
        allStudents={allStudents}
        setAllStudents={setAllStudents}
        setEditMode={setEditMode}
        setVolatileStudent={setVolatileStudent}
      />

      <PresentStudentList allStudents={allStudents} studentAttendanceToggleHandler={studentAttendanceToggleHandler} />

      <AbsentStudentList
        allStudents={allStudents}
        setEditMode={setEditMode}
        setVolatileStudent={setVolatileStudent}
        studentAttendanceToggleHandler={studentAttendanceToggleHandler}
      />
    </div>
  );
}

export default StudentList;
