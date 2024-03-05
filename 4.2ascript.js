document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn sự kiện submit mặc định
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginError = document.getElementById("loginError");

    if (username.trim() === "" || password.trim() === "") {
        alert("Username and password cannot be empty!");
    } else if(username === "admin" && password === "admin") {
        // Chuyển hướng đến trang "trangchu.html"
        window.location.href = "trangchu.html";
    } else {
        loginError.textContent = "Passwords do not match";
        return false;
    }
});

// Thêm sự kiện click cho nút "Login"
document.getElementById("loginButton").addEventListener("click", function(event) {
    document.getElementById("loginForm").submit(); // Gửi biểu mẫu khi nhấn nút "Login"
});
