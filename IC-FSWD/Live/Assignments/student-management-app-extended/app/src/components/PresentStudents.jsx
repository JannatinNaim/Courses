import StudentPreviewPresentOrAbsent from "./StudentPreviewPresentOrAbsent";

function PresentStudents(props) {
  const { students, fetchStudents } = props;

  return (
    <div className="present-students">
      <h2 className="present-students__name">Present Students</h2>

      <ul className="present-students__list">
        {students.map((studentItem, index) =>
          studentItem.isPresent === true ? (
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

export default PresentStudents;
