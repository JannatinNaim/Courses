function Form(props) {
  const createStudentHandler = () => {
    if (props.studentName === "") return alert("Enter a valid student name.");

    const student = {
      id: Date.now(),
      name: props.studentName,
      isPresent: null,
    };

    props.setStudents([...props.students, student]);
    props.setStudentName("");
  };

  const updateStudentHandler = () => {
    props.setStudents(
      props.students.map((student) => {
        if (student.id === props.editableStudent.id) student.name = props.studentName;
        return student;
      })
    );

    props.setEditMode(false);
    props.setEditableStudent(null);

    props.setStudentName("");
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.editMode ? updateStudentHandler() : createStudentHandler();
      }}
    >
      <input
        type="text"
        placeholder="Student Name..."
        value={props.studentName}
        onChange={(event) => props.setStudentName(event.target.value)}
      />

      <button type="submit">{props.editMode ? "Edit" : "Add"} Student</button>
    </form>
  );
}

export default Form;
