<?php

//1.
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['SERVER_SOFTWARE'];
echo "<br>";
echo $_SERVER['SERVER_ADDR'];
echo "<br>";
echo "<br>";

//2
$x = 70;
  
function myfunction() {
  global $x;
  echo $x;
}

myfunction();
echo "<br>";
echo "<br>";

//3.
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("Y:m:d") . "<br>";

echo "<br>";
echo "<br>";

//5 & 6. 
$myfile = fopen("ram.txt", "w");
$txt = "Hello World\n";
fwrite($myfile, $txt);
fclose($myfile);

$myfile = fopen("ram.txt", "r");
echo fread($myfile, filesize("ram.txt")); // Added the size argument
fclose($myfile);

//7.

$file = fopen("search.txt", "r");
while ($line = fgets($file)) {
    echo $line;
    if (trim($line) == "STOP") {
        fclose($file);
        break;
    }
}

//8. 

$file = fopen("essay.txt", "r");
if ($file) {
    $wordCount = 0;
    $isSpace = true;
    while (($char = fgetc($file)) !== false) {
        if (preg_match('/\s+/', $char)) {
            if (!$isSpace) {
                $wordCount++;
                $isSpace = true;
            }
        } else {
            $isSpace = false;
        }
    }
    fclose($file);
    if (!$isSpace) { // Count last word if file doesn't end with a space
        $wordCount++;
    }
    echo "Number of words in the file: $wordCount";
} else {
    echo "Error opening file!";
}

?>
