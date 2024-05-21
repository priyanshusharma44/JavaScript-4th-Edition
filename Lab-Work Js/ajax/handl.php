<?php
include 'Division.php';

try {
    $div = new Division();
    echo $div->divide(10, 2); // Normal division
    echo "<br>";
    echo $div->divide(10, 0); // Division by zero
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
