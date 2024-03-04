// script.js

// Mock data (for demonstration purposes)
let students = [];

// Function to render list of students as a table
function renderStudents() {
    const studentTable = document.getElementById("student-list");
    studentTable.innerHTML = "";
    students.forEach((student, index) => {
        const tr = document.createElement("tr");
        const tdIndex = document.createElement("td");
        tdIndex.textContent = index + 1;
        tr.appendChild(tdIndex);
        const tdName = document.createElement("td");
        tdName.textContent = student.name;
        tr.appendChild(tdName);
        const tdId = document.createElement("td");
        tdId.textContent = student.id;
        tr.appendChild(tdId);
        const tdAction = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Chỉnh sửa";
        editButton.addEventListener("click", () => editStudent(index));
        tdAction.appendChild(editButton);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener("click", () => deleteStudent(index));
        tdAction.appendChild(deleteButton);
        tr.appendChild(tdAction);
        studentTable.appendChild(tr);
    });
}

// Function to add a new student
function addStudent(event) {
    event.preventDefault();
    const name = document.getElementById("student-name").value;
    const id = document.getElementById("student-id").value;
    if (name && id) {
        students.push({ name, id });
        renderStudents();
        document.getElementById("student-form").reset();
    }
}

// Function to edit a student
function editStudent(index) {
    const newName = prompt("Nhập tên mới:");
    const newId = prompt("Nhập mã mới:");
    if (newName && newId) {
        students[index].name = newName;
        students[index].id = newId;
        renderStudents();
    }
}

// Function to delete a student
function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

// Initial render of students
window.onload = renderStudents;

// Event listener for form submission
document.getElementById("student-form").addEventListener("submit", addStudent);
