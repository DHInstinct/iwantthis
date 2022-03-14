

import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

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
            field: 'wishlist',
            headerName: 'Wish List',
            description: 'To view wishlists here',
            sortable: false,
            width: 160,
        }
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', email: "fake@fakemail.com", wishlist: "view my list here" },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "fake@fakemail.com", wishlist: "view my list here" },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: "fake@fakemail.com", wishlist: "view my list here" },
        { id: 4, lastName: 'Stark', firstName: 'Arya', email: "fake@fakemail.com", wishlist: "view my list here" },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: "fake@fakemail.com", wishlist: "view my list here" },
        { id: 6, lastName: 'Melisandre', firstName: null, email: "fake@fakemail.com", wishlist: "view my list here" },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: "fake@fakemail.com", wishlist: "view my list here" },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', email: "fake@fakemail.com", wishlist: "view my list here" },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: "fake@fakemail.com", wishlist: "view my list here" },
    ];

    return (
        <>
            <div className='container mx-auto pt-10' style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pemailSize={7}
                    rowsPerPemailOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>

    );
}