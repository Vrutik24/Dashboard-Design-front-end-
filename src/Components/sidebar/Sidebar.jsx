import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';
import { MessageOutlined } from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                  <Link to='/' className='link'>
                      <li className='sidebarItem'>
                        <HomeIcon/>
                        <span className='itemName'>Home</span>              
                      </li>
                  </Link>
                      <li className='sidebarItem'>
                        <InsightsIcon/>
                        <span className='itemName'>Analytics</span>   
                      </li>
                      <li className='sidebarItem'>
                        <TrendingUpIcon/>
                        <span className='itemName'>Sales</span>             
                      </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                  <Link to='/users' className='link'>
                      <li className='sidebarItem'>
                        <PersonOutlineIcon/>
                        <span className='itemName'>User</span>     
                      </li>
                  </Link>
                  <Link to='/products' className='link'>
                      <li className='sidebarItem'>
                        <Inventory2Icon/>
                        <span className='itemName'>Product</span>            
                      </li>
                  </Link>
                      <li className='sidebarItem'>
                        <AttachMoneyOutlinedIcon/>
                        <span className='itemName'>Transaction</span>         
                      </li>
                      <li className='sidebarItem'>
                        <EqualizerOutlinedIcon/>
                        <span className='itemName'>Reports</span>         
                      </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                      <li className='sidebarItem'>
                        <MailOutlinedIcon/>
                        <span className='itemName'>Mail</span>
                      </li>
                      <li className='sidebarItem'>
                        <DynamicFeedOutlinedIcon/>
                        <span className='itemName'>Feedback</span>      
                      </li>
                      <li className='sidebarItem'>
                        <ChatBubbleOutlineOutlinedIcon/>
                        <span className='itemName'>Messages</span>             
                      </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                      <li className='sidebarItem'>
                        <LockOutlinedIcon/>
                        <span className='itemName'>Manage</span>             
                      </li>
                      <li className='sidebarItem'>
                        <InsightsIcon/>
                        <span className='itemName'>Analytics</span>             
                      </li>
                      <li className='sidebarItem'>
                        <ReportIcon/>
                        <span className='itemName'>Reports</span>             
                      </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
