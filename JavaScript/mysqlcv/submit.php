<?php
$localhost = 'localhost';
$username = 'root';
$password = '';
$databasename = 'abc';
$conn = new mysqli($localhost, $username, $password, $databasename);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $education = $_POST['education'];
    $experience = $_POST['experience'];
    $skills= $_POST['skills'];
    
    $image = $_FILES['image']['name'];
    $cv = $_FILES['cv']['name'];
    $image_temp = $_FILES['image']['tmp_name'];
    $cv_temp = $_FILES['cv']['tmp_name'];
    move_uploaded_file($image_temp, "uploads/$image");
    move_uploaded_file($cv_temp, "uploads/$cv");

    $sql = "INSERT INTO abc (name, email, education, experience, skills, image, cv) VALUES ('$name','$email','$education','$experience','$skills','$image','$cv')";
    $result = mysqli_query($conn, $sql); 
    if($result) {
        header('location:view.php');
    } else {
        echo "Error: " . $conn->error;
    }
    $conn->close();
}

?>


