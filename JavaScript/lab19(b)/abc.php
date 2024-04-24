<?php

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'lab19b';

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$errors = [];

$full_name = mysqli_real_escape_string($conn, $_POST['full_name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

if (strlen($full_name) > 40) {
    $errors[] = "Full name must be up to 40 characters.";
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email address.";
}

if (!preg_match("/^[a-zA-Z]+[0-9]+$/", $username)) {
    $errors[] = "Username must start with a letter and followed by  number.";
}

if (strlen($password) < 8) {
    $errors[] = "Password must be at least 8 characters.";
}

if (!empty($errors)) {
    foreach ($errors as $error) {
        echo $error . "<br>";
    }
} else {
    
    $sql = "INSERT INTO lab19b (full_name, email, username, password) VALUES ('$full_name', '$email', '$username', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo "Record added successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
