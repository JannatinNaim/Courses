import { useState, createContext } from "react";

export const StudentContext = createContext();

function StudentContextProvider({ children }) {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    class: "",
    section: "",
    description: "",
    isPresent: null,
  });
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);

  function fetchStudents() {
    fetch("http://localhost:3000/students/")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }

  return (
    <StudentContext.Provider
      value={{
        student,
        setStudent,
        students,
        setStudents,
        editMode,
        setEditMode,
        fetchStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentContextProvider;
