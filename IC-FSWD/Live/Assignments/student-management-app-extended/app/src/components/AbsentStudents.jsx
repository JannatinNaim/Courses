import StudentPreviewPresentOrAbsent from "./StudentPreviewPresentOrAbsent";

function AbsentStudents(props) {
  const { students, fetchStudents } = props;

  return (
    <div className="absent-students">
      <h2 className="absent-students__name">Absent Students</h2>

      <ul className="absent-students__list">
        {students.map((studentItem, index) =>
          studentItem.isPresent === false ? (
            <StudentPreviewPresentOrAbsent
              key={index}
              id={studentItem.id}
              name={studentItem.name}
              class={studentItem.class}
              students={students}
              fetchStudents={fetchStudents}
            />
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

export default AbsentStudents;
