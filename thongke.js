
const students = [
    {
        msv: "B21DCCN501",
        ten: "Nguyễn Văn Phong",
        kiThi: "Cuối kì",
        ngayThi: "02/03/2024",
        Diem: 9.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN112",
        ten: "Trần Thu Hà",
        kiThi: "Cuối kì",
        ngayThi: "02/03/2024",
        Diem: 8.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN007",
        ten: "Nguyễn Văn Anh",
        kiThi: "Cuối kì",
        ngayThi: "02/03/2024",
        Diem: 7.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN601",
        ten: "Nguyễn Thị Phương",
        kiThi: "Giữa kì",
        ngayThi: "02/01/2024",
        Diem: 6.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN211",
        ten: "Đỗ Thị Dung",
        kiThi: "Giữa kì",
        ngayThi: "02/01/2024",
        Diem: 10.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN301",
        ten: "Đặng Tuấn Dũng",
        kiThi: "Giữa kì",
        ngayThi: "02/01/2024",
        Diem: 5.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN421",
        ten: "Trần Minh Nhật",
        kiThi: "Giữa kì",
        ngayThi: "02/01/2024",
        Diem: 8.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN741",
        ten: "Phạm Văn Quân",
        kiThi: "Kỳ phụ",
        ngayThi: "22/12/2023",
        Diem: 6.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN761",
        ten: "Đinh Thị Mai Thủy",
        kiThi: "Kỳ phụ",
        ngayThi: "22/12/2023",
        Diem: 7.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN841",
        ten: "Hoàng Thị Yến",
        kiThi: "Khảo sát",
        ngayThi: "30/07/2023",
        Diem: 8.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN501",
        ten: "Nguyễn Văn Phong",
        kiThi: "Cuối kì",
        ngayThi: "02/03/2024",
        Diem: 9.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN112",
        ten: "Trần Thu Hà",
        kiThi: "Cuối kì",
        ngayThi: "02/03/2024",
        Diem: 8.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN007",
        ten: "Nguyễn Văn Anh",
        kiThi: "Cuối kì",
        ngayThi: "02/03/2024",
        Diem: 7.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN601",
        ten: "Nguyễn Thị Phương",
        kiThi: "Giữa kì",
        ngayThi: "02/01/2024",
        Diem: 6.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN211",
        ten: "Đỗ Thị Dung",
        kiThi: "Giữa kì",
        ngayThi: "02/01/2024",
        Diem: 10.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN301",
        ten: "Đặng Tuấn Dũng",
        kiThi: "Giữa kì",
        ngayThi: "02/01/2024",
        Diem: 5.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN421",
        ten: "Trần Minh Nhật",
        kiThi: "Giữa kì",
        ngayThi: "02/01/2024",
        Diem: 8.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN741",
        ten: "Phạm Văn Quân",
        kiThi: "Kỳ phụ",
        ngayThi: "22/12/2023",
        Diem: 6.5,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN761",
        ten: "Đinh Thị Mai Thủy",
        kiThi: "Kỳ phụ",
        ngayThi: "22/12/2023",
        Diem: 7.0,
        hoanThanh: 1
    },
    {
        msv: "B21DCCN841",
        ten: "Hoàng Thị Yến",
        kiThi: "Khảo sát",
        ngayThi: "30/07/2023",
        Diem: 8.0,
        hoanThanh: 1
    },
];



const xValues = [
    "0", "0.25", "0.5", "0.75", "1.0", "1.25", "1.5", "1.75", "2.0", "2.25", "2.5", "2.75", 
    "3.0", "3.25", "3.5", "3.75", "4.0", "4.25", "4.5", "4.75", "5.0", "5.25", "5.5", "5.75", 
    "6.0", "6.25", "6.5", "6.75", "7.0", "7.25", "7.5", "7.75", "8.0", "8.25", "8.5", "8.75",
    "9.0", "9.25", "9.5", "9.75", "10.0" 

];
const yValues = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0

];

function demPhoDiem(filteredStudents){
    filteredStudents.forEach(student => {
        yValues[student.Diem*4]++;
    });
}

demPhoDiem(students);

const barColors = "red";

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            label: "Điểm",
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "BIỂU ĐỒ PHÂN PHỐI ĐIỂM SỐ"
        }
    }
});

function populateStudentTable(filteredStudents) {
    const studentBody = document.getElementById('student-body');
    studentBody.innerHTML = '';

    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.msv}</td>
            <td>${student.ten}</td>
            <td>${student.kiThi}</td>
            <td>${student.ngayThi}</td>
            <td>${student.Diem}</td>
        `;
        row.addEventListener('click', () => {
            selectedStudent = student;
            showContestTable(student);
        });
        studentBody.appendChild(row);
    });
}

// Display default results when the page loads
populateStudentTable(students);

const totalParticipation = students.length;
const totalParticipationElement = document.getElementById("total-participation");
totalParticipationElement.innerText = totalParticipation;

const totalScore = students.reduce((accumulator, student) => accumulator + student.Diem, 0);
const averageScore = totalScore / students.length;
const totalParticipationElement2 = document.getElementById("total-participation2");
totalParticipationElement2.innerText = averageScore;

const tyLe = students.reduce((accumulator, student) => accumulator + student.hoanThanh, 0);
const tyLeTB = tyLe / students.length *100;
const totalParticipationElement1 = document.getElementById("total-participation1");
totalParticipationElement1.innerText = tyLeTB + "%";


function filterData() {
    var selectElement = document.getElementById("exam-filter");
    var selectedValue = selectElement.value;

    var selectElement1 = document.getElementById("exam-filter1");
    var dateString = selectElement1.value;

    console.log(selectedValue);
    console.log(dateString);
    
    let filteredStudents = students;

    if(selectedValue !== "all" && dateString !== "all") {
        filteredStudents = students.filter(student =>
            student.kiThi === selectedValue && student.ngayThi.split('/')[1] === dateString
        );
    } else if(selectedValue !== "all") {
        filteredStudents = students.filter(student =>
            student.kiThi === selectedValue
        );
    } else if(dateString !== "all") {
        filteredStudents = students.filter(student =>
            student.ngayThi.split('/')[1] === dateString
        );
    }

    populateStudentTable(filteredStudents);
}


function exportToPDF() {
    //if (selectedStudent) {
        const exportWindow = window.open('', '_blank');

        // Create an HTML document for printing
        exportWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Báo cáo thống kê</title>
            </head>
            <body>
                <h1>Báo Cáo Thống Kê</h1>
            </body>
            </html>
        `);

        // Focus the new window
        //exportWindow.focus();
        

        // Print the document using the browser's built-in print functionality
        exportWindow.print();
        exportWindow.close();
    /*} else {
        alert('Please select a student before exporting.');
    }*/
}

