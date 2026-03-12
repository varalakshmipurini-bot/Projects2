import React, { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [student, setStudent] = useState({
    roll_no: "",
    name: "",
    class: "",
    marks: "",
    email: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/addResult", data);

      alert("Student added successfully!");
      setStudent({ roll_no: "", name: "", class: "", marks: "", email: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding student!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="roll_no" placeholder="Roll No" value={student.roll_no} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
        <input type="text" name="class" placeholder="Class" value={student.class} onChange={handleChange} required />
        <input type="number" name="marks" placeholder="Marks" value={student.marks} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
