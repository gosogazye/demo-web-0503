
const students = [
    {
        name: "Nguyễn Văn An",
        studentId: "123456",
        age: 20,
        averageGrade: 75,
        attendedTests: 2,
        contests: [
            {
                name: "Kỳ Thi 1",
                score: 85,
                status: "Hoàn Thành",
                time: "2024-03-04 10:30:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "A",
                        correctAnswer: "D",
                        explanation: "Giải thích câu 1"
                    },
                    // Additional results for the same contest
                ]
                
            },
            {
                name: "Kỳ Thi 2",
                score: 85,
                status: "Chưa hoàn thành",
                time: "--",
                results: [
                ]
            }
            // Additional contests for the same student
        ]
    },
    {
        name: "Trần Linh Chi",
        studentId: "789012",
        age: 22,
        averageGrade: 80,
        attendedTests: 1,
        contests: [
            {
                name: "Kỳ Thi 1",
                score: 75,
                status: "Hoàn Thành",
                time: "2024-03-04 11:15:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    {
                        question: "Câu Hỏi 2",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    {
                        question: "Câu Hỏi 3",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    {
                        question: "Câu Hỏi 4",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    }
                    // Additional results for the same contest
                ]
            },
            // Additional contests for the second student
        ]
    },
    {
        name: "Phạm Minh Đức",
        studentId: "781012",
        age: 18,
        averageGrade: 23,
        attendedTests: 1,
        contests: [
            {
                name: "Kỳ Thi 1",
                score: 75,
                status: "Hoàn Thành",
                time: "2024-03-06 11:15:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    // Additional results for the same contest
                ]
            },
            {
                name: "Kỳ Thi 2",
                score: 75,
                status: "Hoàn Thành",
                time: "2024-03-06 11:15:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    {
                        question: "Câu Hỏi 2",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    // Additional results for the same contest
                ]
            },
            {
                name: "Kỳ Thi 3",
                score: 75,
                status: "Hoàn Thành",
                time: "2024-03-06 11:15:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    // Additional results for the same contest
                ]
            },
            {
                name: "Kỳ Thi 4",
                score: 34,
                status: "Hoàn Thành",
                time: "2024-03-06 11:15:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    {
                        question: "Câu Hỏi 2",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    {
                        question: "Câu Hỏi 3",
                        studentAnswer: "B",
                        correctAnswer: "A",
                        explanation: "Giải thích câu 1"
                    },
                    // Additional results for the same contest
                ]
            }
            // Additional contests for the second student
        ]
    },
    // Additional students with contests...
    {
        name: "Vũ Thị Hoa",
        studentId: "123789",
        age: 20,
        averageGrade: 84,
        attendedTests: 5,
        contests: [
            {
                name: "Kỳ Thi 1",
                score: 82,
                status: "Hoàn Thành",
                time: "2024-03-11 14:15:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "A",
                        correctAnswer: "B",
                        explanation: "Giải thích câu 1"
                    },
                    {
                        question: "Câu Hỏi 2",
                        studentAnswer: "D",
                        correctAnswer: "B",
                        explanation: "Giải thích câu 1"
                    },
                    {
                        question: "Câu Hỏi 3",
                        studentAnswer: "A",
                        correctAnswer: "B",
                        explanation: "Giải thích câu 1"
                    }
                    // Additional results for the same contest
                ]
            },
            // Additional contests for the ninth student
        ]
    },
    {
        name: "Nguyễn Thị Kiên",
        studentId: "456789",
        age: 22,
        averageGrade: 76,
        attendedTests: 4,
        contests: [
            {
                name: "Kỳ Thi 1",
                score: 70,
                status: "Hoàn Thành",
                time: "2024-03-12 13:00:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "A",
                        correctAnswer: "B",
                        explanation: "Giải thích câu 1"
                    },
                    // Additional results for the same contest
                ]
            },
            {
                name: "Kỳ Thi Học Kỳ",
                score: 70,
                status: "Hoàn Thành",
                time: "2024-03-12 13:00:00",
                results: [
                    {
                        question: "Câu Hỏi 1",
                        studentAnswer: "A",
                        correctAnswer: "B",
                        explanation: "Giải thích câu 1"
                    },
                    // Additional results for the same contest
                ]
            },
            // Additional contests for the tenth student
        ]
    },
    // Continue adding students and contests as needed
];

const contestTable = document.getElementById('contest-table');
const labelContestTable = document.getElementById('label-contest-table');
const resultTable = document.getElementById('result-table');
const labelResultTable = document.getElementById('label-result-table');


function populateStudentTable(filteredStudents) {
    const studentBody = document.getElementById('student-body');
    studentBody.innerHTML = '';

    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.studentId}</td>
            <td>${student.age}</td>
            <td>${student.averageGrade}</td>
            <td>${student.attendedTests}</td>
        `;
        row.addEventListener('click', () => {
            selectedStudent = student;
            showContestTable(student);
        });
        studentBody.appendChild(row);
    });
}

// Function to show the contest table based on selected student

function showContestTable(selectedStudent) {
    
    const contestBody = document.getElementById('contest-body');
    contestBody.innerHTML = '';
    if (selectedStudent != null)
    labelContestTable.innerHTML = "Dach sách các kỳ thi của sinh viên " + selectedStudent.name ;

    selectedStudent.contests.forEach(contest => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contest.name}</td>
            <td>${contest.score}</td>
            <td>${contest.status}</td>
            <td>${contest.time}</td>
        `;
        row.addEventListener('click', () => showResultTable(selectedStudent, contest));
        contestBody.appendChild(row);
    });

    // Show the contest table
    contestTable.style.display = 'table';
    resultTable.style.display = 'none';
    
}

// Function to show the result table based on selected student and contest

function showResultTable(selectedStudent, selectedContest) {
    
    const resultBody = document.getElementById('result-body');
    resultBody.innerHTML = '';
    labelResultTable.innerHTML = "Chi tiết bài thi của  "  + selectedContest.name + " của sinh viên " + selectedStudent.name;
    selectedContest.results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.question}</td>
            <td>${result.studentAnswer}</td>
            <td>${result.correctAnswer}</td>
            <td>${result.explanation}</td>
        `;
        resultBody.appendChild(row);
    });

    // Show the result table and export button
    resultTable.style.display = 'table';
    document.getElementById('export-btn').style.display = 'block';
}



// Function to perform a search based on name and student ID
const labelStudentTable = document.getElementById('label-student-table');
function searchStudent() {
    const nameSearchTerm = document.getElementById('name-search').value.toLowerCase();
    const idSearchTerm = document.getElementById('id-search').value.toLowerCase();
    if ((nameSearchTerm === undefined || nameSearchTerm.length === 0) && (idSearchTerm.length === 0 || idSearchTerm === undefined)) {
        labelStudentTable.innerHTML = "Danh sách tất cả sinh viên";
    }else{
        labelStudentTable.innerHTML = "Danh sách kết quả sinh viên đã lọc";
    }
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(nameSearchTerm) &&
        student.studentId.toLowerCase().includes(idSearchTerm)
    );
    
    populateStudentTable(filteredStudents);
    contestTable.style.display = "none";
    resultTable.style.display = "none";
    document.getElementById('export-btn').style.display = 'none';
}

// Display default results when the page loads
populateStudentTable(students);

function exportResult() {
    if (selectedStudent) {
        const exportWindow = window.open('', '_blank');

        // Create an HTML document for printing
        exportWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Kết Quả Thi - ${selectedStudent.name}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    h1, h2, h3 {
                        color: #333;
                    }
                    p, ul {
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <h1>Kết Quả Thi - ${selectedStudent.name}</h1>
        `);

        // Add contest details to the HTML document
        selectedStudent.contests.forEach((contest, index) => {
            exportWindow.document.write(`
                <h2>Kỳ Thi: ${contest.name}</h2>
                <p>Điểm Số: ${contest.score}</p>
                <p>Trạng Thái: ${contest.status}</p>
                <p>Thời Gian Tham Gia: ${contest.time}</p>
                <h3>Kết Quả Chi Tiết:</h3>
            `);

            contest.results.forEach((result, resultIndex) => {
                exportWindow.document.write(`
                    <p>Câu Hỏi ${resultIndex + 1}:</p>
                    <ul>
                        <li>Câu Trả Lời của Sinh Viên: ${result.studentAnswer}</li>
                        <li>Đáp Án Đúng: ${result.correctAnswer}</li>
                        <li>Giải Thích: ${result.explanation}</li>
                    </ul>
                `);
            });

            exportWindow.document.write('<hr>'); // Add a horizontal line between contests
        });

        exportWindow.document.write(`
                </body>
            </html>
        `);

        // Focus the new window
        //exportWindow.focus();
        

        // Print the document using the browser's built-in print functionality
        exportWindow.print();
        exportWindow.close();
    } else {
        alert('Please select a student before exporting.');
    }
}