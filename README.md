# Student Record & Performance Tracker

## Project Overview
This project demonstrates core MongoDB and Mongoose concepts by building a simple student record management system.  
The focus of the project is on **database modeling, relationships using ObjectId references, and organized controller-based operations**, without any frontend or API layer.

---

## What This Project Demonstrates
- MongoDB database design
- Mongoose schema creation and validation
- ObjectId references between collections
- Separation of concerns using controllers
- Clean project structure using ES modules

---

## Collections Used

### 1️. students
Stores basic student information.

**Fields:**
- name
- rollNo
- class
- gender

---

### 2️. subjects
Stores subject details.

**Fields:**
- name
- maxMarks

---

### 3️. marks
Stores marks scored by students in subjects using references.

**Fields:**
- studentId (ObjectId reference to Students)
- subjectId (ObjectId reference to Subjects)
- marks
- examDate

---

## 🔗 Relationships (ObjectId References)

- A **student** can have marks in multiple subjects.
- A **subject** can have marks from multiple students.
- The `marks` collection acts as a bridge using ObjectId references.

This approach is conceptually similar to foreign keys in SQL, but relationships are handled at the application level.

---

## ⚙️ Technologies Used
- MongoDB
- Mongoose
- Node.js
- ES Modules (import/export)

---