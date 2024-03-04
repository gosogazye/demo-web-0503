
const xValues = [
                    "0", "0.25", "0.5", "0.75", "1.0", "1.25", "1.5", "1.75", "2.0", "2.25", "2.5", "2.75", 
                    "3.0", "3.25", "3.5", "3.75", "4.0", "4.25", "4.5", "4.75", "5.0", "5.25", "5.5", "5.75", 
                    "6.0", "6.25", "6.5", "6.75", "7.0", "7.25", "7.5", "7.75", "8.0", "8.25", "8.5", "8.75",
                    "9.0", "9.25", "9.5", "9.75", "10.0" 

                ];
const yValues = [
                    20, 0, 0, 0, 15, 65, 95, 146, 88, 1004, 405, 520,
                    564, 405, 541, 648, 972, 907, 981, 1024, 1214, 1004, 871, 1050,
                    1300, 1504, 2405, 2647, 3001, 2451, 4001, 3042, 3451, 1004, 800, 508,
                    401, 201, 120, 89, 45

                ];
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

function exportToPDF() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    var source = document.getElementById('container'); // Lấy phần tử chứa kết quả
    var specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true; // Bỏ qua xử lý các phần tử có id là "bypassme"
        }
    };
    var margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };

    pdf.fromHTML(
        source, // Phần tử HTML hoặc chuỗi HTML
        margins.left, // Tọa độ x
        margins.top, {
            'width': margins.width, // Chiều rộng tối đa của nội dung trên PDF
            'elementHandlers': specialElementHandlers
        },
        function (dispose) {
            pdf.save('thongke.pdf'); // Lưu file PDF với tên "result.pdf"
        }, margins
    );
    alert("Xác nhận tải xuống file PDF!");
    
}
