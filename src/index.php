<?php

echo("Hello");  
    
    $mysqli = new mysqli("db", "my_user", "my_password", "userdb");

     /* check connection */

    // echo($mysqli);

    if (mysqli_connect_errno())
    {
        echo "Connect failed: " . mysqli_connect_error() . "<br />";
        exit();
    }
    /* Create table and Insert rows */
    if (!$mysqli->query("CREATE TABLE family (fam_id int, fam_name varchar(20), fam_relationship varchar(20), primary key(fam_id))"))
            $mysqli->error;

    if (!$mysqli->query("INSERT INTO family VALUES (1,'Jen Lynn', 'Wife'), (2,'Brian', 'Self'),(3, 'Michael', 'Son'), (4, 'Katherine', 'Daughter'), (5, 'Alex', 'Son'), (6, 'Drew', 'Step-Son'), (7, 'Olivia', 'Step-Daugther')"))
            $mysqli->error;

    /* select all rows */

    $result = $mysqli->query("SELECT * FROM family"); 
     echo "Affected rows by (SELECT): " . $mysqli->affected_rows . "<br />";

    while($row = $result->fetch_assoc())
           echo stripslashes($row['fam_name']) . "<br />";      
     /* close connection */

    $mysqli->close();

        echo("hello from php");
