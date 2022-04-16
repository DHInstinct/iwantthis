<?php

require_once("config/config.php");

    $id = $_GET['id'];

    $query = "select * from Product where p_id='{$id}' limit 1";
    
    $result = $mysqli->query($query);

    $product = [];

    if($result->num_rows > 0) 
    {
        // output data of each row
        while($row = $result->fetch_assoc()) {

            $product["id"] = $row["p_id"];
            $product["cat"] = $row["cat_id"];
            $product["name"] = $row["p_name"];
            $product["image"] = $row["p_image"];
            $product["des"] = $row["p_description"];
            $product["price"] = $row["p_price"];
            $product["review"] = $row["p_review"];

        }

        echo json_encode($product);

    }
    else
    {
        $data = array("message"=>"Error retrieving single product");
        echo json_encode($data);        
        return http_response_code(422);
    }