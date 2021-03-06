<?php
// require_once("config.php");
require_once("config/config.php");

$request = file_get_contents("php://input");
if(isset($request) && !empty($request)){

    $data = json_decode($request);

    $email = $data->username;
    $pass = $data->password;
    
    $query = "select * from User u inner join Wish_List wl on u.u_id=wl.u_id inner join Favorite f on wl.wl_id = f.wl_id where u_email='" . $email . "' and u_pass='" . md5($pass) ."'limit 1";

    $result = $mysqli->query($query);

    $users = [];

    if($result->num_rows > 0) 
    {
        // output data of each row
        $cr = 0;
        while($row = $result->fetch_assoc()) {

            $users[$cr]["id"] = $row["u_id"];
            $users[$cr]["email"] = $row["u_email"];
            $users[$cr]["password"] = $row["u_pass"];
            $users[$cr]["fname"] = $row["u_fname"];
            $users[$cr]["admin"] = $row["u_admin"];
            $users[$cr]["wishlistid"] = $row["wl_id"];
            $cr++;

        }

        echo json_encode($users);

    }
    else
    {
        $data = array("message"=>"Wrong Email or Password. Please try again.");
        echo json_encode($data);        
        return http_response_code(422);
    }
}

