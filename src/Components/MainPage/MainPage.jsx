import React from 'react';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Chart from '../chart/Chart';
import { userData } from '../../dummydata';
import WidgetSm from '../WidgetSm/widgetSm';
import WidgetLg from '../WidgetLg/widgetLg';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className='mainPage'>
        <div className='paperWrapper'>
            <Paper className='paper' elevation={3}>
                <div className='paperDetail'>
                    <h3 className='paperTitle'>Revenue</h3>
                    <div className='paperCost'>
                        <span className='paperCost1'>$2454</span>
                        <span className='paperCost2'>-11.4</span>
                        <ArrowDownwardIcon sx={{color : "red"}}/>
                    </div>
                    <h6 className='paperComp'>Compared to last month</h6>
                </div>
            </Paper>
            <Paper className='paper' elevation={3}>
                <div className='paperDetail'>
                    <h3 className='paperTitle'>Sales</h3>
                    <div className='paperCost'>
                        <span className='paperCost1'>$2454</span>
                        <span className='paperCost2'>-11.4</span>
                        <ArrowDownwardIcon sx={{color : "red"}}/>
                    </div>
                    <h6 className='paperComp'>Compared to last month</h6>
                </div>
            </Paper>
            <Paper className='paper' elevation={3}>
                <div className='paperDetail'>
                    <h3 className='paperTitle'>Cost</h3>
                    <div className='paperCost'>
                        <span className='paperCost1'>$2454</span>
                        <span className='paperCost2'>-11.4</span>
                        <ArrowDownwardIcon sx={{color : "red"}}/>
                    </div>
                    <h6 className='paperComp'>Compared to last month</h6>
                </div>
            </Paper>
        </div>
        <Chart height={350} data = {userData} title = "User Analytics" dataKey="User"/>
        <div className='widget'>
            <WidgetSm/>
            <WidgetLg/>

        </div>
    </div>
  )
}
