import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { rows } from '../../dummyRawData';
import { width } from '@mui/system';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [data, setData] = useState(rows);
    const handleClick = (id) => {
      setData(data.filter((item)=> item.id!=id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) =>{
            return (
                <div className='userListUser'>
                   <img src='https://img.bleacherreport.net/img/images/photos/003/802/730/hi-res-8b43a586d3d4d40c2bd1dc1e0da13fe6_crop_exact.jpg?w=3072&h=2048&q=75' alt='Steph'/> 
                   {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'action',
            headerName : 'Action',
            width : 150,
            renderCell: (params) =>{
                return (
                    <>
                      <Link to={'/user/'+params.row.id}>
                        <button className='gridEditBtn'>Edit</button>
                      </Link>
                        <DeleteOutlineIcon className='gridDeleteBtn' onClick = {() => handleClick(params.row.id)}/>
                    </>
                )
            }
        }
      ];
      

  return (
    <div className='userList'>
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}
