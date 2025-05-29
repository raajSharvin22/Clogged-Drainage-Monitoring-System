<?php
$host = "localhost";
$db = "clogged_drainage";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

// Check if user exists
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Error preparing statement: " . $conn->error);
}
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// If username exists, check password
if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    
    if (password_verify($password, $row['password'])) {
        echo "success";  // Login successful
    } else {
        echo "invalid_password";  // Incorrect password
    }
} else {
    echo "user_not_found";  // Username not found
}

$stmt->close();
$conn->close();
?>
