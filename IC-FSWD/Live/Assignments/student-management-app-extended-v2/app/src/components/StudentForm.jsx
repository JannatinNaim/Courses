import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

function StudentForm() {
  const { student, setStudent, editMode, setEditMode, fetchStudents } = useContext(StudentContext);

  function resetStudent() {
    setStudent({ name: "", roll: "", class: "", section: "", description: "" });
  }

  function handelSubmit(e) {
    e.preventDefault();

    !editMode ? addStudent() : updateStudent();
  }

  function addStudent() {
    fetch("http://localhost:3000/students/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: Date.now(), ...student }),
    }).then(fetchStudents);

    resetStudent();
  }

  function updateStudent() {
    fetch("http://localhost:3000/students/" + student.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }).then(fetchStudents);

    resetStudent();
    setEditMode(false);
  }

  function cancelEdit() {
    resetStudent();
    setEditMode(false);
  }

  return (
    <form className="student-form" onSubmit={(e) => handelSubmit(e)}>
      <div className="student-form__inputs">
        <input
          required
          type="text"
          placeholder="Name"
          className="student-form__inputs__name"
          value={student.name}
          onChange={(e) => setStudent((data) => ({ ...data, name: e.target.value }))}
        />

        <input
          type="number"
          placeholder="Roll"
          className="student-form__inputs__roll"
          value={student.roll}
          onChange={(e) => setStudent({ ...student, roll: e.target.value })}
        />

        <input
          type="text"
          placeholder="Class"
          className="student-form__inputs__class"
          value={student.class}
          onChange={(e) => setStudent({ ...student, class: e.target.value })}
        />

        <input
          type="text"
          placeholder="Section"
          className="student-form__inputs__section"
          value={student.section}
          onChange={(e) => setStudent({ ...student, section: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="student-form__inputs__description"
          value={student.description}
          onChange={(e) => setStudent({ ...student, description: e.target.value })}
        ></textarea>
      </div>

      <div className="student-form__actions">
        <button
          type="submit"
          className={`student-form__actions__submit student-form__actions__submit--${!editMode ? "add" : "update"}`}
        >
          {!editMode ? "Add" : "Update"} Student
        </button>

        {editMode ? (
          <button className="student-form__actions__cancel" onClick={cancelEdit}>
            Cancel Edit
          </button>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default StudentForm;
