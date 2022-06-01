import StudentPreview from "./StudentPreview";
import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

function AllStudents() {
  const { students } = useContext(StudentContext);

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
          />
        ))}
      </ul>
    </div>
  );
}

export default AllStudents;
