import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentStudentList from "./AbsentStudentList";

function StudentSection(props) {
  const studentAttendanceToggleHandler = (studentId) => {
    const bufferStudent = props.students.find((student) => student.id === studentId);

    props.setStudents(
      props.students.map((student) => {
        if (student.id === bufferStudent.id) student.isPresent = !student.isPresent;
        return student;
      })
    );
  };

  return (
    <div className="students-section" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
      <AllStudentList
        studentName={props.studentName}
        setStudentName={props.setStudentName}
        students={props.students}
        setStudents={props.setStudents}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editableStudent={props.editableStudent}
        setEditableStudent={props.setEditableStudent}
        studentAttendanceToggleHandler={studentAttendanceToggleHandler}
      />

      <PresentStudentList
        studentName={props.studentName}
        setStudentName={props.setStudentName}
        students={props.students}
        setStudents={props.setStudents}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editableStudent={props.editableStudent}
        setEditableStudent={props.setEditableStudent}
        studentAttendanceToggleHandler={studentAttendanceToggleHandler}
      />

      <AbsentStudentList
        studentName={props.studentName}
        setStudentName={props.setStudentName}
        students={props.students}
        setStudents={props.setStudents}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editableStudent={props.editableStudent}
        setEditableStudent={props.setEditableStudent}
        studentAttendanceToggleHandler={studentAttendanceToggleHandler}
      />
    </div>
  );
}

export default StudentSection;
