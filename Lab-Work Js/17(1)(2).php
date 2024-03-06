<?php
$grades = array(
    "NG" => 13,
    "PG" => 14,
    "BG" => 11,
    "RM" => 18
);

$total = 0;
$count = count($grades);

foreach ($grades as $student => $grade) {
    $total += $grade;
}

$average = $total / $count;

echo "Average Grade: " . $average;
echo "<br>";

function calculateCircleArea($radius) {
    $area = 3.14 * $radius * $radius;
    return $area;
}

// Test the function
$radius1 = 6;
$radius2 = 11;
echo "Area of circle with radius $radius1: " . calculateCircleArea($radius1) . "<br>";
echo "Area of circle with radius $radius2: " . calculateCircleArea($radius2) . "<br>";
?>

?>
