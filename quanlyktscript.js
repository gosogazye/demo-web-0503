let exams = [];

function renderExams() {
    const examList = document.getElementById("examList");
    examList.innerHTML = "";
    exams.forEach((exam, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${exam.name}</td>
            <td>${exam.date}</td>
            <td>${exam.participants}</td>
            <td>
                <button onclick="editExam(${index})">Chỉnh sửa</button>
                <button onclick="deleteExam(${index})">Xóa</button>
            </td>`;
        examList.appendChild(tr);
    });
}

function addExam() {
    const examNameInput = document.getElementById("examName");
    const examDateInput = document.getElementById("examDate");
    const examParticipantsInput = document.getElementById("examParticipants");

    const examName = examNameInput.value.trim();
    const examDate = examDateInput.value;
    const examParticipants = examParticipantsInput.value.trim();

    if (examName !== "" && examParticipants !== "" && !isNaN(examParticipants)) {
        exams.push({ name: examName, date: examDate, participants: examParticipants });
        examNameInput.value = "";
        examDateInput.value = "";
        examParticipantsInput.value = "";
        renderExams();
    } else {
        alert("Vui lòng điền đầy đủ thông tin và số lượng thí sinh phải là số");
    }
}

function editExam(index) {
    const newName = prompt("Nhập tên mới cho kỳ thi");
    if (newName !== null) {
        exams[index].name = newName.trim();
        renderExams();
    }
}

function deleteExam(index) {
    if (confirm("Bạn có chắc chắn muốn xóa kỳ thi này?")) {
        exams.splice(index, 1);
        renderExams();
    }
}

window.onload = renderExams;
