# 🎓 Student Result Management System

A simple full-stack web application to manage student results.  
Users can add student details and view all results in a structured table.

---

## 🚀 Features

- Add new student results
- View all student results
- Responsive UI using Bootstrap
- Backend API using Node.js and Express
- MySQL database integration
- React frontend

---

## 🛠️ Technologies Used

Frontend:
- React.js
- Bootstrap
- Axios
- HTML
- CSS

Backend:
- Node.js
- Express.js

Database:
- MySQL

---

## 📂 Project Structure
student-result-system
│
├── student-backend
│ ├── server.js
│ ├── db.js
│ └── .env
│
├── student-result-system
│ ├── public
│ ├── src
│ │ ├── components
│ │ │ ├── AddResult.js
│ │ │ └── ResultList.js
│ │ ├── App.js
│ │ └── index.js
│ └── package.json


---

## ⚙️ Installation

### 1️⃣ Clone the repository
git clone https://github.com/yourusername/student-result-management-system.git


---

### 2️⃣ Install frontend dependencies
cd student-result-system
npm install


---

### 3️⃣ Install backend dependencies
cd student-backend
npm install


---

## 🗄️ Database Setup
Open MySQL and create a database:

CREATE DATABASE student_db;


Create the table:


USE student_db;

CREATE TABLE results (
id INT AUTO_INCREMENT PRIMARY KEY,
rollno VARCHAR(20),
name VARCHAR(100),
subject VARCHAR(100),
marks INT
);


---

## ▶️ Run the Application

Start backend server:
cd student-backend
node server.js

Start React frontend:
cd student-result-system
npm start


Open browser:
http://localhost:3000


---

## 📸 Project Screenshot

(<img width="1920" height="1020" alt="Screenshot 2026-03-12 151835" src="https://github.com/user-attachments/assets/0d0ac0a1-237f-4e0f-a709-d1cf33a2fd00" />
)

---

## 📌 Future Improvements

- Edit student result
- Delete student result
- Search student by roll number
- Authentication (Admin login)
- Result grade calculation

---

## 👩‍💻 Author

Varalakshmi Purini

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
