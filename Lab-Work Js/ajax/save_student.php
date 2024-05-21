<?php
// Check if form data is received
if(isset($_POST['name']) && isset($_POST['email'])) {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Database connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ajax";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert data into database
    $sql = "INSERT INTO students (name, email) VALUES ('$name', '$email')";
    if ($conn->query($sql) === TRUE) {
        echo "Data uploaded successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    echo "Error: Form data not received";
}
?>
