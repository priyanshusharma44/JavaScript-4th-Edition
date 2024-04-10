
<?php 
    include 'connect.php';
$id=$_GET['updateid'];

$sql="SELECT * from crud where id=$id";
$result =mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($result);
$name=$row['name'];
$email=$row['email'];
$password=$row['password'];

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql= "UPDATE crud set id=$id, name='$name', email='$email', password='$password' where id=$id ";

    $result = mysqli_query($con, $sql);
    if($result) {
       header('location:display.php');
      // echo "Data updated successfully";
    } else {
        die(mysqli_error($con));
    }
}
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <title>Crud operation</title>
</head>

<body>
    <div class="container my-5">

        <form method="post">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Enter your name" name="name" value=<?php echo $name; ?>>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Enter your email" name="email" value=<?php echo $email; ?>>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Enter your password" name="password" value=<?php echo $password;?>>
            </div>

            <button type="submit" class="btn btn-primary" name="submit">Update</button>
        </form>

    </div>
</body>

</html>
