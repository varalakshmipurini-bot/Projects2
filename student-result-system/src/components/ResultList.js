import React, { useEffect, useState } from "react";
import axios from "axios";

function ResultList() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/results")
      .then(res => setResults(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>📋 All Results</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.rollno}</td>
              <td>{r.name}</td>
              <td>{r.subject}</td>
              <td>{r.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultList;
