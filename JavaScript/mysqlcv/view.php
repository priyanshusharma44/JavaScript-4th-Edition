<?php
$localhost = 'localhost';
$username = 'root';
$password = '';
$databasename = 'abc';
$conn = new mysqli($localhost, $username, $password, $databasename);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM abc";
$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submissions</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>CV Submissions</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Education</th>
            <th>Work Experience</th>
            <th>Skills</th>
            <th>Image</th>
            <th>CV</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['email'] . "</td>";
                echo "<td>" . $row['education'] . "</td>";
                echo "<td>" . $row['experience'] . "</td>";
                echo "<td>" . $row['skills'] . "</td>";
                echo "<td><img src='uploads/" . $row['image'] . "' height='100'></td>";
                echo "<td><a href='uploads/" . $row['cv'] . "' target='_blank'>View CV</a></td>";
                echo "</tr>";
            }
        } 
        ?>
    </table>
</body>
</html>

<?php
$conn->close();
?>
