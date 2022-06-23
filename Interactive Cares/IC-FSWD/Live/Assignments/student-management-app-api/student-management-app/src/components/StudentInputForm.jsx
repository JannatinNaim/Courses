function StudentInputForm({
  studentName,
  setStudentName,
  allStudents,
  setAllStudents,
  editMode,
  setEditMode,
  volatileStudent,
  setVolatileStudent,
  fetchStudents,
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

    fetch("http://localhost:3000/students", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(student),
    }).then(() => {
      setStudentName("");
      fetchStudents();
    });
  };

  const updateStudent = () => {
    const toBeUpdatedStudent = allStudents.find((student) => student.id === volatileStudent.id);

    fetch("http://localhost:3000/students/" + volatileStudent.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        ...toBeUpdatedStudent,
        name: studentName,
      }),
    }).then(() => {
      setEditMode(false);
      setStudentName("");
      setVolatileStudent(null);
      fetchStudents();
    });
  };

  const cancelEdit = () => {
    setStudentName("");
    setEditMode(false);
    setVolatileStudent(null);
  };

  return (
    <form className="student-input-form" onSubmit={(event) => handleSubmit(event)}>
      <input
        required
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
