<?php
// Connect to database (assuming you have already created a database)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nepal";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert feedback into database
$sql = "INSERT INTO nepaltable (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Feedback submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
