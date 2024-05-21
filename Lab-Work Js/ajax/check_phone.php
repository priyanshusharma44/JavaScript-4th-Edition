<?php
$phone = $_POST['phone'];

// Simulate checking against a database
$existingPhones = ["1234567890", "0987654321", "5555555555"];

if (in_array($phone, $existingPhones)) {
    echo "<span style='color: red;'>Phone number already taken</span>";
} else {
    echo "<span style='color: green;'>Phone number available</span>";
}
?>
