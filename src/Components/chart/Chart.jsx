import React from 'react';
import Paper from '@mui/material/Paper';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';
import { userData } from '../../dummydata';
import { PausePresentation } from '@mui/icons-material';

export default function Chart({title, data, dataKey, grid, height}) {
  
  return (
    <div className='chart'>
        <Paper className='chartPaper' sx={{height:height}} elevation={6}>
            <h3 className='chartTitle'>
                {title}
            </h3>
            <ResponsiveContainer className="chartContainer" width="80%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd'/>
                    <Line className='chartLine' type="monotone" dataKey = {dataKey} stroke="#5550bd" />
                    <Tooltip/>
                    {grid && <CartesianGrid stroke='#eodfdf' strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    </div>
  )
}
