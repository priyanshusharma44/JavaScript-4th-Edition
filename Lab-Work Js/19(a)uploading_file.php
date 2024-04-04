<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="image" />
        <input type="submit" value="Upload Image" name="submit"/>
    </form>

    <?php
    if(isset($_FILES['image'])){
        $allowed_types = array('jpg', 'jpeg', 'png', 'gif');
        $file_name = $_FILES['image']['name'];
        $file_tmp = $_FILES['image']['tmp_name'];
        $file_size = $_FILES['image']['size'];
        $file_extension = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        $upload_directory = __DIR__ . "/uploaded-images/";

        if (!in_array($file_extension, $allowed_types)) {
            echo "Only JPG, JPEG, PNG, and GIF files are allowed.";
        } elseif ($file_size > 2097152) { 
            echo "File size is too large. Please upload a smaller file.";
        } elseif(move_uploaded_file($file_tmp, $upload_directory . $file_name)) {
            echo "Uploaded Successfully";
            echo "<br>";
            echo "<img src='uploaded-images/$file_name' alt='Uploaded Image'>";
        } else {
            echo "File upload error.";
        }
    }
    ?>
</body>
</html>
