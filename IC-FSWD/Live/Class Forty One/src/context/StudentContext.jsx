import { useState, createContext } from "react";

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [volatileStudent, setVolatileStudent] = useState(null);

  return (
    <StudentContext.Provider
      value={{
        studentName,
        setStudentName,
        allStudents,
        setAllStudents,
        editMode,
        setEditMode,
        volatileStudent,
        setVolatileStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
