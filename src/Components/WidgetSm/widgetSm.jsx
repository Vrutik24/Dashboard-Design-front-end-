import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Paper from '@mui/material/Paper';
import './widgetSm.css';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <Paper elevation={6} sx={{padding : 2}}>
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmItem'>
                <img src='https://th.bing.com/th/id/R.299790b66056ff764130938d0464841e?rik=TOfmxL4Uu6gzrg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fBpGE71h.jpg&ehk=ISpTpzDR5Ix7myvtOh2GTt1ZacEhZKvLl%2bWZeZCYxzM%3d&risl=&pid=ImgRaw&r=0' alt='Kobe'/>
                <div className='widgetSmItemDesc'>
                    <span className='widgetSmUser'>Anna Keller</span>
                    <span className='widgetSmJob'>Software Developer</span>
                </div>
                <button className='widgetSmBtn'>
                    <VisibilityIcon className='widgetSmBtnIcon'/>
                    <span className='btnText'>Display</span>
                </button>
            </li>
            <li className='widgetSmItem'>
                <img src='https://www.poynter.org/wp-content/uploads/2020/05/AP_98061201413-2.jpg' alt='Kobe'/>
                <div className='widgetSmItemDesc'>
                    <span className='widgetSmUser'>Anna Keller</span>
                    <span className='widgetSmJob'>Software Developer</span>
                </div>
                <button className='widgetSmBtn'>
                    <VisibilityIcon className='widgetSmBtnIcon'/>
                    <span className='btnText'>Display</span>
                </button>
            </li>
            <li className='widgetSmItem'>
                <img src='https://th.bing.com/th/id/OIP.-HboRA7ZP__3rZStZlnLVAHaE8?pid=ImgDet&rs=1' alt='Kobe'/>
                <div className='widgetSmItemDesc'>
                    <span className='widgetSmUser'>Anna Keller</span>
                    <span className='widgetSmJob'>Software Developer</span>
                </div>
                <button className='widgetSmBtn'>
                    <VisibilityIcon className='widgetSmBtnIcon'/>
                    <span className='btnText'>Display</span>
                </button>
            </li>
            <li className='widgetSmItem'>
                <img src='https://th.bing.com/th/id/OIP.zG0f8kV7qmTicCxIJJwAFwHaE8?pid=ImgDet&rs=1' alt='Kobe'/>
                <div className='widgetSmItemDesc'>
                    <span className='widgetSmUser'>Anna Keller</span>
                    <span className='widgetSmJob'>Software Developer</span>
                </div>
                <button className='widgetSmBtn'>
                    <VisibilityIcon className='widgetSmBtnIcon'/>
                    <span className='btnText'>Display</span>
                </button>
            </li>
            <li className='widgetSmItem'>
                <img src='https://th.bing.com/th/id/OIP.ynUWKQnG-sY9ySB5xEQIegHaE8?pid=ImgDet&rs=1' alt='Kobe'/>
                <div className='widgetSmItemDesc'>
                    <span className='widgetSmUser'>Anna Keller</span>
                    <span className='widgetSmJob'>Software Developer</span>
                </div>
                <button className='widgetSmBtn'>
                    <VisibilityIcon className='widgetSmBtnIcon'/>
                    <span className='btnText'>Display</span>
                </button>
            </li>
        </ul>
        </Paper>
    </div>
  )
}
