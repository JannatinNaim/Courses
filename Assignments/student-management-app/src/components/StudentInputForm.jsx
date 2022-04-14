function StudentInputForm({
  studentName,
  setStudentName,
  allStudents,
  setAllStudents,
  editMode,
  setEditMode,
  volatileStudent,
  setVolatileStudent,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    editMode ? updateStudent() : addStudent();
  };

  const addStudent = () => {
    const student = {
      id: Date.now(),
      name: studentName,
      isPresent: null,
    };

    setAllStudents([...allStudents, student]);
    setStudentName("");
  };

  const updateStudent = () => {
    setAllStudents(
      allStudents.map((student) => {
        if (student.id === volatileStudent.id) student.name = studentName;
        return student;
      })
    );

    setEditMode(false);
    setStudentName("");
    setVolatileStudent(null);
  };

  const cancelEdit = () => {
    setStudentName("");
    setEditMode(false);
    setVolatileStudent(null);
  };

  return (
    <form className="student-input-form" onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Name"
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
        className="student-input-form__name"
      />

      {/* <button type="submit" className="student-input-form__submit"> */}
      <button type="submit" className={editMode ? "student-input-form__edit" : "student-input-form__submit"}>
        {editMode ? "Edit" : "Add"} Student
      </button>

      {editMode ? (
        <button className="student-input-form__cancel" onClick={cancelEdit}>
          Cancel
        </button>
      ) : (
        ""
      )}
    </form>
  );
}

export default StudentInputForm;
