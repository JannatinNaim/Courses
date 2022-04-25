import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const { allStudents, setAllStudents } = useContext(StudentContext);

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
      <AllStudentList />

      <PresentStudentList studentAttendanceToggleHandler={studentAttendanceToggleHandler} />

      <AbsentStudentList studentAttendanceToggleHandler={studentAttendanceToggleHandler} />
    </div>
  );
}

export default StudentList;
