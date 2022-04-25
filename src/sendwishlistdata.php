<?php

require_once("config/config.php");

$request = file_get_contents("php://input");

if(isset($request) && !empty($request)){

    $data = json_decode($request);

    $wishlistid = $data->wishlistid;
    $productid = $data->productid;
    

    $query = "insert into Favorite (`p_id`, `wl_id`) 
    values
    (
    '{$productid}',
    '{$wishlistid}'
    )
    ";

    echo $query;

    $result = $mysqli->query($query);

    echo json_encode($result);



    // echo $query;

    // $query = "select * from User";

    // echo json_encode($result);
    // echo json_encode($result);

}