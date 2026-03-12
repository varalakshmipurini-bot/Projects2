import React, { useState } from "react";
import axios from "axios";

function ResultForm() {
  const [form, setForm] = useState({ rollno: "", name: "", subject: "", marks: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/results", form);
      alert("Result added successfully!");
      setForm({ rollno: "", name: "", subject: "", marks: "" });
    } catch {
      alert("Error adding result");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="rollno" placeholder="Roll No" value={form.rollno} onChange={handleChange} required />
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
      <input name="marks" type="number" placeholder="Marks" value={form.marks} onChange={handleChange} required />
      <button type="submit">Add Result</button>
    </form>
  );
}

export default ResultForm;
