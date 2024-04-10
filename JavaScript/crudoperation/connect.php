<?php
$con = new mysqli('localhost', 'root','', 'datass');

// Check connection
if(!$con)
{
    die(mysqli_error($con));
}
else{
    //echo "connected
}
?>