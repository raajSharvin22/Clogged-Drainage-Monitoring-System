document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        const response = xhr.responseText.trim();
        if (response === "success") {
            localStorage.setItem("username", username);
            window.location.href = "selectTaman.html";
        } else if (response === "invalid_password") {
            errorMsg.textContent = "Invalid password! Please try again.";
        } else if (response === "user_not_found") {
            errorMsg.textContent = "Username not found!";
        } else {
            errorMsg.textContent = "An error occurred. Please try again.";
        }
    };

    xhr.send(`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
});
