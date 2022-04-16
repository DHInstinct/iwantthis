<?php

require_once("config/config.php");

    $query = "select * from Product";
    // $query = "select * from User";

    $result = $mysqli->query($query);

    $products = [];

    if($result->num_rows > 0) 
    {
        // output data of each row
        $cr = 0;
        while($row = $result->fetch_assoc()) {

            $products[$cr]["id"] = $row["p_id"];
            $products[$cr]["cat"] = $row["cat_id"];
            $products[$cr]["name"] = $row["p_name"];
            $products[$cr]["image"] = $row["p_image"];
            $products[$cr]["des"] = $row["p_description"];
            $products[$cr]["price"] = $row["p_price"];
            $cr++;

        }

        echo json_encode($products);

    }
    else
    {
        $data = array("message"=>"Error retrieving products");
        echo json_encode($data);        
        return http_response_code(422);
    }