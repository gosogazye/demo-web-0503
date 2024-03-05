document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("examForm");
    const questionList = document.getElementById("questionList");
    const addQuestionBtn = document.getElementById("addQuestionBtn");

    addQuestionBtn.addEventListener("click", function() {
        addQuestion();
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        saveExam();
    });

    function addQuestion() {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>Câu hỏi</h3>
            <input type="text" name="question[]" placeholder="Câu hỏi" required>
            <button type="button" class="deleteBtn">Xóa</button>
            <label for="answers">Đáp án:</label> 
            <button type="button" class="addAnswerBtn">Thêm đáp án</button>
            <input type="text" name="answers[]" placeholder="Đáp án" required>
           
        `;
        questionList.appendChild(li);
    }

    questionList.addEventListener("click", function(event) {
        if (event.target && event.target.classList.contains("deleteBtn")) {
            event.target.parentNode.remove();
        } else if (event.target && event.target.classList.contains("addAnswerBtn")) {
            addAnswer(event.target.parentNode);
        }
    });

    function addAnswer(parentNode) {
        const answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.name = "answers[]";
        answerInput.placeholder = "Đáp án";
        answerInput.required = true;

        const deleteAnswerBtn = document.createElement("button");
        deleteAnswerBtn.type = "button";
        deleteAnswerBtn.classList.add("deleteBtn");
        deleteAnswerBtn.textContent = "Xóa";
        deleteAnswerBtn.addEventListener("click", function() {
            parentNode.removeChild(answerInput);
            parentNode.removeChild(deleteAnswerBtn);
        });

        parentNode.appendChild(answerInput);
        parentNode.appendChild(deleteAnswerBtn);
    }

    function saveExam() {
        
        alert("Exam data saved!");
    }
});
