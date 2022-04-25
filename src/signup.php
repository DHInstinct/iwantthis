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

    $result = $mysqli->query($query);

    // $query2 = "SELECT * FROM User ORDER BY u_id DESC LIMIT 1";
    $query2 = "select * from User order by u_id desc limit 1";
    
    // echo $query2;

    $result2 = $mysqli->query($query2);

    $user = [];

    while($row = $result2->fetch_assoc()) {

        $user["id"] = $row["u_id"];
        $user["fname"] = $row["u_fname"];

    }

    $one = $user["id"];
    $two = $user["fname"];

    //making user a wishlist.
    $query3 = "insert into Wish_List (`u_id`, `wl_name`) 
    values
    (
    '{$one}',
    '{$two}s Wishlist'
    )";
    
    $mysqli->query($query3);

    //now grab the wishlistid

    $query4 = "select User.u_id, u_fname, Wish_List.wl_id from Wish_List inner join User on Wish_List.u_id=User.u_id where Wish_List.u_id={$one}";

    $data3 = $mysqli->query($query4);

    while($row = $data3->fetch_assoc()) {

        $user["id"] = $row["u_id"];
        $user["fname"] = $row["u_fname"];
        $user["wishlistid"] = $row["wl_id"];

    };

    echo json_encode($user);

}