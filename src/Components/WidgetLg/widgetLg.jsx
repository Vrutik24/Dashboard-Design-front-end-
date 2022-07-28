import React from 'react';
import Paper from '@mui/material/Paper';
import './widgetLg.css';


export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>;
  }

  return (
    <div className='widgetLg'>
        <Paper elevation={6} sx = {{padding : 2}}>
          <span className='widgetLgTitle'>Latest transactions</span>
          <table className='widgetLgTable'>
            <tr className='widgetLgTr'>
              <th className='widgetLgTh'>Customer</th>
              <th className='widgetLgTh'>Date</th>
              <th className='widgetLgTh'>Amount</th>
              <th className='widgetLgTh'>Status</th>
            </tr>
            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img src='https://img.bleacherreport.net/img/images/photos/003/802/730/hi-res-8b43a586d3d4d40c2bd1dc1e0da13fe6_crop_exact.jpg?w=3072&h=2048&q=75' alt='steph'/>
                <span className='widgetLgName'>Susan Carol</span>
              </td>
              <td className='widgetLgDate'>23 May 2021</td>
              <td className='widgetLgAmount'>$122.00</td>
              <td className='widgetLgBtn'><Button type="Approved"/></td>
            </tr>
            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img src='https://img.bleacherreport.net/img/images/photos/003/802/730/hi-res-8b43a586d3d4d40c2bd1dc1e0da13fe6_crop_exact.jpg?w=3072&h=2048&q=75' alt='steph'/>
                <span className='widgetLgName'>Susan Carol</span>
              </td>
              <td className='widgetLgDate'>23 May 2021</td>
              <td className='widgetLgAmount'>$122.00</td>
              <td className='widgetLgBtn'><Button type="Declined"/></td>
            </tr>
            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img src='https://img.bleacherreport.net/img/images/photos/003/802/730/hi-res-8b43a586d3d4d40c2bd1dc1e0da13fe6_crop_exact.jpg?w=3072&h=2048&q=75' alt='steph'/>
                <span className='widgetLgName'>Susan Carol</span>
              </td>
              <td className='widgetLgDate'>23 May 2021</td>
              <td className='widgetLgAmount'>$122.00</td>
              <td className='widgetLgBtn'><Button type="Pending"/></td>
            </tr>
            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img src='https://img.bleacherreport.net/img/images/photos/003/802/730/hi-res-8b43a586d3d4d40c2bd1dc1e0da13fe6_crop_exact.jpg?w=3072&h=2048&q=75' alt='steph'/>
                <span className='widgetLgName'>Susan Carol</span>
              </td>
              <td className='widgetLgDate'>23 May 2021</td>
              <td className='widgetLgAmount'>$122.00</td>
              <td className='widgetLgBtn'><Button type="Approved"/></td>
            </tr>
          </table>
        </Paper>
    </div>
  )
}

