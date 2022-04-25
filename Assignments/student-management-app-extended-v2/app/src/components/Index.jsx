import { useEffect, useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import AbsentStudents from "./AbsentStudents";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";
import StudentForm from "./StudentForm";

function Index() {
  const { fetchStudents } = useContext(StudentContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchStudents, []);

  return (
    <div className="main">
      <h1 className="main__name">Student Management App</h1>

      <StudentForm />

      <div className="students-list">
        <AllStudents />

        <PresentStudents />

        <AbsentStudents />
      </div>
    </div>
  );
}

export default Index;
