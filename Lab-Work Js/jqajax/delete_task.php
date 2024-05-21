<?php
include 'db.php';

$id = $_POST['id'];

$sql = "DELETE FROM tasks WHERE id=$id";
if ($conn->query($sql) === TRUE) {
    echo "Task deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
