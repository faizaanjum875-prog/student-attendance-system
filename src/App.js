import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const addStudent = () => {
    if (!name.trim()) {
      alert("Please enter student name");
      return;
    }

    const newStudent = {
      id: uuidv4(),
      name: name,
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
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🎓 Student Attendance System</h1>

        <div style={styles.inputSection}>
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <button onClick={addStudent} style={styles.addButton}>
            Add Student
          </button>
        </div>

        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.studentList}>
          {filteredStudents.length === 0 ? (
            <p style={styles.noData}>No students found</p>
          ) : (
            filteredStudents.map((student) => (
              <div key={student.id} style={styles.studentCard}>
                <span style={styles.studentName}>{student.name}</span>

                <button
                  onClick={() => deleteStudent(student.id)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "400px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },

  heading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#333",
  },

  inputSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  searchInput: {
    width: "95%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  addButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  studentList: {
    marginTop: "10px",
  },

  studentCard: {
    backgroundColor: "#f4f4f4",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  studentName: {
    fontWeight: "bold",
    color: "#333",
  },

  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  noData: {
    textAlign: "center",
    color: "#666",
  },
};

export default App;