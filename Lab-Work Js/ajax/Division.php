<?php
class Division {
    public function divide($numerator, $denominator) {
        if ($denominator == 0) {
            throw new Exception("Division by zero is not allowed.");
        }
        return $numerator / $denominator;
    }
}
?>
