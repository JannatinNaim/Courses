import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Student() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/students/" + id)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  return (
    <div className="student">
      <div className="student__content">
        <span>Name: {student?.name}</span>
        <span>Roll: {student?.roll}</span>
        <span>Class: {student?.class}</span>
        <span>Section: {student?.section}</span>
        <span>Description: {student?.description}</span>
      </div>

      <Link to="/" className="student__link">
        Back To Home
      </Link>
    </div>
  );
}

export default Student;
