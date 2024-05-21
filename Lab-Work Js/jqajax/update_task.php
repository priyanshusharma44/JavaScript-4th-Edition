<?php
include 'db.php';

$id = $_POST['id'];
$completed = $_POST['completed'];

$sql = "UPDATE tasks SET completed=$completed WHERE id=$id";
if ($conn->query($sql) === TRUE) {
    echo "Task updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
