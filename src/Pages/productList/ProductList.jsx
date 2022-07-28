import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyRawData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom'; 
import './productList.css';

export default function ProductList() {

  const [productList, setProductList] = useState(productRows)

  const handleClick = (id)=>{
    setProductList(productList.filter((product)=>product.id!= id))
  }
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'product', headerName: 'Product', width: 250, renderCell : (params)=>{
      return (
        <>
          <img className='productImg' src='https://www.gadgetreview.com/wp-content/uploads/2020/05/Apple-Airpods-Review-scaled.jpg' alt='Airpods'/>
          {params.row.product}
        </>
      )
    }},
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
    },
    { field: 'price', headerName: 'Price', width: 200 },
    { field : 'action', headerName : 'Action', width : 150, renderCell : (params)=>{
      return (
        <>
          <Link to='/product/:productId'>
            <button className='actionBtn'>Edit</button>
          </Link>
          <DeleteOutlineIcon className='deleteBtn' onClick = {()=>handleClick(params.row.id)}/>
        </>
      )
    }
 }
    
  ];

  return (
    <div className='productList'>
        <DataGrid
          rows = {productList}
          columns = {columns}
          disableSelectionOnClick
          pageSize = {10}
          rowsPerPageOptions = {[10]}
          checkboxSelection
        />
    </div>
  )
}
