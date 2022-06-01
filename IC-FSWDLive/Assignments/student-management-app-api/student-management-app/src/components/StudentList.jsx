import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";

function StudentList({ setStudentName, allStudents, setAllStudents, setEditMode, setVolatileStudent, fetchStudents }) {
  const studentAttendanceToggleHandler = (studentId) => {
    const toBeToggledStudent = allStudents.find((student) => student.id === studentId);

    fetch("http://localhost:3000/students/" + studentId, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        ...toBeToggledStudent,
        isPresent: !toBeToggledStudent.isPresent,
      }),
    }).then(() => fetchStudents());
  };

  return (
    <div className="student-list">
      <AllStudentList
        setStudentName={setStudentName}
        allStudents={allStudents}
        setAllStudents={setAllStudents}
        setEditMode={setEditMode}
        setVolatileStudent={setVolatileStudent}
        fetchStudents={fetchStudents}
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
