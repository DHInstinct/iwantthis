<?php

require_once("config/config.php");

$request = file_get_contents("php://input");
if(isset($request) && !empty($request)){ 
    
    $data = json_decode($request);

    $id = $data->id;


    $query = "select 
    f.fav_id 'ID',
    w.wl_id 'WishListID',
    w.wl_name 'NameOfWishList',
    p.p_name 'ProductName',   
    p.p_price 'Price',
    p.p_image 'Image'
   from Wish_list w 
   inner join Favorite f on w.wl_id=f.wl_id 
   inner join Product p on f.p_id=p.p_id
   where w.u_id={$id}";
    // $query = "select * from User";

    $result = $mysqli->query($query);

    $wishlist = [];

    if($result->num_rows > 0) 
    {
        // output data of each row
        $cr = 0;
        while($row = $result->fetch_assoc()) {

            $wishlist[$cr]["ID"] = $row["ID"];
            $wishlist[$cr]["WishListID"] = $row["WishListID"];
            $wishlist[$cr]["NameOfWishList"] = $row["NameOfWishList"];
            $wishlist[$cr]["ProductName"] = $row["ProductName"];
            $wishlist[$cr]["Price"] = $row["Price"];
            $wishlist[$cr]["Image"] = $row["Image"];
            $cr++;

        }

        echo json_encode($wishlist);

    }
    else
    {
        $data = array("message"=>"Error retrieving Wishlist");
        echo json_encode($data);        
        return http_response_code(422);
    }

}
