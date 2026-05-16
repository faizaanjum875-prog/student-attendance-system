import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const addStudent = () => {
    if (!name.trim()) {
      alert("Student name required");
      return;
    }

    const newStudent = {
      id: uuidv4(),
      name: name
    };

    setStudents([...students, newStudent]);
    setName("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Attendance System</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <br /><br />

      <input
        type="text"
        placeholder="Search student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;