import React from 'react';
import axios from 'axios';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const FetchUsers = () => {
    return axios
    .get("http://localhost:80/adminusers.php")
    .then(response => {
        console.log(response)
        return response
    })
    .catch(error => {
        console.log("Error fetching users", error)
    })
}

const FetchUserWishList = () => {
    /*select 
 f.fav_id 'ID',
 w.wl_id 'WishListID',
 w.u_id 'UserID',
 w.wl_name 'NameOfWishList',
 p.p_name 'ProductName',   
 p.p_price 'Price',
 p.p_image 'Image'
from Wish_list w 
inner join Favorite f on w.wl_id=f.wl_id 
inner join Product p on f.p_id=p.p_id
where 'UserID' = 0 */


}


export default function Admin() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'email',
            headerName: 'email',
            type: 'email',
            width: 250,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },

        {
            field: 'wishlistNames',
            headerName: 'Wish List',
            description: 'To view wishlists here',
            valueFormatter: (params) => params.value.wishlistname,
            sortable: false,
            width: 160,
            type: 'string'

        }
    ];

    const [users, setUsers] = useState([])

    useEffect(() =>{
        FetchUsers().then((data) => {
        setUsers(data)

    })
}, []);

    return (
        <>
            <div className='container mx-auto pt-10' style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={users.data}
                    columns={columns}
                    pemailSize={7}
                    rowsPerPemailOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>

    );
}