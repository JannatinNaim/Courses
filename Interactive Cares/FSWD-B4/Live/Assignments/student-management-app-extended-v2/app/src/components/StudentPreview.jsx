import { Link } from "react-router-dom";
import StudentPreviewActions from "./StudentPreviewActions";

function StudentPreview(props) {
  const { id } = props;

  return (
    <li className="student-preview">
      <Link to={"/student/" + id} className="student-preview__link">
        <div className="student-preview__content">
          <span>Name: {props.name}</span>
          <span>Class: {props.class}</span>
          <span>Roll: {props.roll}</span>
          <span>Section: {props.section}</span>
        </div>
      </Link>

      <StudentPreviewActions id={id} />
    </li>
  );
}

export default StudentPreview;
