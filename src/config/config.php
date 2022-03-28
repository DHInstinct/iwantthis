<?php
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'iwantthis' );
/** MySQL database username */
define( 'DB_USER', 'dhinstinct' );
/** MySQL database password */
define( 'DB_PASSWORD', 'mundellisabetterprof;)' );
/** MySQL hostname*/
define( 'DB_HOST', 'db' );

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
// $mysqli = new mysqli("db", "my_user", "my_password", "userdb");


if (mysqli_connect_errno())
{
    // echo "Connect failed: " . mysqli_connect_error() . "<br />";
    die("Connection Fail" . mysqli_connect_error());
    // exit();
}
// else
// {
//     echo 'Hi';
//     $result = $mysqli->query("select * from User"); 
//     echo "Affected rows by (SELECT): " . $mysqli->affected_rows . "<br />";
//     while($row = $result->fetch_assoc())
//            echo stripslashes($row['u_fname']) . "<br />";
// }
//echo $mysqli;

// $result = $mysqli->query("SELECT * FROM Users"); 
// echo "Affected rows by (SELECT): " . $mysqli->affected_rows . "<br />";
// while($row = $result->fetch_assoc())
//     echo stripslashes($row['u_fname']) . "<br />";  


