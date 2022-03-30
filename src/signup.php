<?php

require_once("config/config.php");

$request = file_get_contents("php://input");
if(isset($request) && !empty($request)){

    $data = json_decode($request);

    $firstname = $data->firstname;
    $lastname = $data->lastname;
    $email = $data->email;
    $password = md5($data->password);
    


    // echo $firstname;
    // echo $lastname;
    // echo $email;
    // echo $password;

    $query = "insert into User (`u_fname`, `u_lname`, `u_email`, `u_pass`) 
    values
    (
    '{$firstname}',
    '{$lastname}',
    '{$email}',
    '{$password}'
    )
    ";

    // echo $query;

    // $query = "select * from User";
    $result = $mysqli->query($query);

    echo json_encode($result);

}