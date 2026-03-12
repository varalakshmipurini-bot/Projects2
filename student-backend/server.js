const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Add a result
app.post("/api/results", (req, res) => {
  const { rollno, name, subject, marks } = req.body;
  const sql = "INSERT INTO results (rollno, name, subject, marks) VALUES (?, ?, ?, ?)";
  db.query(sql, [rollno, name, subject, marks], (err) => {
    if (err) return res.status(500).send("Database error");
    res.send("Result added successfully");
  });
});

// Get all results
app.get("/api/results", (req, res) => {
  db.query("SELECT * FROM results", (err, rows) => {
    if (err) return res.status(500).send("Database error");
    res.json(rows);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
