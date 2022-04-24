import StudentPreview from "./StudentPreview";

function AllStudents(props) {
  const { setStudent, students, setEditMode, fetchStudents } = props;

  return (
    <div className="all-students">
      <h2 className="all-students__name">All Students</h2>

      <ul className="all-students__list">
        {students.map((studentItem, index) => (
          <StudentPreview
            key={index}
            id={studentItem.id}
            name={studentItem.name}
            roll={studentItem.roll}
            class={studentItem.class}
            section={studentItem.section}
            setStudent={setStudent}
            students={students}
            setEditMode={setEditMode}
            fetchStudents={fetchStudents}
          />
        ))}
      </ul>
    </div>
  );
}

export default AllStudents;
