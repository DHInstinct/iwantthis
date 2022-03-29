<?php

require_once("config/config.php");

$request = file_get_contents("php://input");
if(isset($request) && !empty($request)){

    $data = json_decode($request);

    $firstname = $data->firstname;
    $lastname = $data->lastname;
    $email = $data->email;
    $password = $data->password;
    
    $query = "insert into Users ";
    // $query = "select * from User";

    $result = $mysqli->query($query);
}