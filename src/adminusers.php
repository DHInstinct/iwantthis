<?php

require_once("config/config.php");

    $query = "select * from User";

    $result = $mysqli->query($query);

    $users = [];
    
    if($result->num_rows > 0) 
    {
        // output data of each row
        $cr = 0;
        $extra = 0;
        while($row = $result->fetch_assoc()) {
            
            //output for each user
            $users[$cr]["id"] = $row["u_id"];
            $users[$cr]["firstName"] = $row["u_fname"];
            $users[$cr]["lastName"] = $row["u_lname"];
            $users[$cr]["email"] = $row["u_email"];
            $users[$cr]['wishlistNames'] = array();

            //each user can have multiple wishlists make sure to account for them here.
            $query2 = "select 
            u.u_id,
            w.wl_id,
            w.wl_name
            from Wish_list w 
            inner join User u on w.u_id=u.u_id
            where u.u_id =" . $row["u_id"];

            $innerResult = $mysqli->query($query2);
            while($innerRow = $innerResult->fetch_assoc())
            {
                $users[$cr]['wishlistNames'][$extra]['wishlistid'] = $innerRow["wl_id"];
                $users[$cr]['wishlistNames'][$extra]['wishlistname'] = $innerRow["wl_name"];
                $extra++;
            }
                $cr++;
        }

        echo json_encode($users);

    }
    else
    {
        $data = array("message"=>"Error retrieving users");
        echo json_encode($data);        
        return http_response_code(422);
    }