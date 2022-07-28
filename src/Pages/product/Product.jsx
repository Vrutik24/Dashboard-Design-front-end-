import { Paper } from '@mui/material';
import React from 'react';
import Chart from '../../Components/chart/Chart';
import { productData } from '../../dummydata';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';
import './product.css';

export default function Product() {
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='ptoductTitle'> Product</h1>
            <Link to='/newProduct'>
            <button className='productCreateBtn'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
          <div className='productTopLeft'>
            <Chart className="productChart" height={210} data={productData} dataKey = "Sales" title= "Sales Performance"/>
          </div>

          <div className='productTopRight'>
            <Paper elevation={6} className = "productPaper">
              <div className='productInfoTop'>
                <img src='https://www.gadgetreview.com/wp-content/uploads/2020/05/Apple-Airpods-Review-scaled.jpg' alt='Airpods'/>
                <span className='productInfoTitle'>Apple Airpods</span>
              </div>
              <div className='productInfoBottom'>
              <div className='productInfoItem'> 
                <span className='productInfoKey'>id:</span>
                <span className='productInfoValue'>123</span>
              </div>
              <div className='productInfoItem'> 
                <span className='productInfoKey'>sales:</span>
                <span className='productInfoValue'>5123</span>
              </div>
              <div className='productInfoItem'> 
                <span className='productInfoKey'>active:</span>
                <span className='productInfoValue'>yes</span>
              </div>
              <div className='productInfoItem'> 
                <span className='productInfoKey'>in stock:</span>
                <span className='productInfoValue'>no</span>
              </div>
              </div>
            </Paper> 

          </div>
        </div>

        
          <Paper elevation={6} className = "productBottomPaper">
            <div className='productBottom'>
              <div className='productForm'> 
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
              </div>
              <div className='productUpdateImg'> 
                <div className='productUpdateTop'>
                  <img src='https://geekculture.co/wp-content/uploads/2019/03/apple-airpods.jpg' alt='airpods' className='upadateImg'/>
                  <input type='file' style={{display:'none'}}/>
                  <label htmlFor='file'><PublishIcon/></label>
                </div>

                <div className='productUpdateBottom'>
                  <button className='productUpdateBtn'>Update</button>
                </div>

              </div>
              
            </div>
            
          
            
          </Paper>

        

    </div>
  )
 }
