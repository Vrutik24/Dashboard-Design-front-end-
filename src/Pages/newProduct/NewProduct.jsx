import React from 'react';
import './newProduct.css';

export default function NewProduct() {
  return (
    <div className='newProduct'>
        <h1 className='newProductHeading'>
            New Product
        </h1>
        <form className='productForm'> 
                <div className='formItem'>
                  <label>Product Name</label>
                  <input type='text' placeholder='Apple AirPod'/>
                </div>
                <div className='formItem'>
                  <label>In Stock</label>
                  <select name='inStock' id='inStock'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                  </select>
                </div>
                <div className='formItem'>
                  <label>Active</label>
                  <select name='active' id='qctive'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                  </select>
                </div>
                <button className='newProductBtn'>Add Product</button>
                </form>
    </div>
  )
}
