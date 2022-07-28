import React from 'react';
import "./topbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>
                    DashBoard
                </span>
            </div>
            <div className='topRight'>
                <NotificationsIcon className='topbarIcon'/>
                <LanguageIcon className='topbarIcon'/>
                <SettingsIcon className='topbarIcon'/>
                <img className='topbarImg topbarIcon' src='https://th.bing.com/th/id/OIP.8rHVVbFMazhHL4e6QgRj3AHaEo?pid=ImgDet&rs=1' alt='Vrutik'/>
            </div>
        </div>
    </div>
  )
}
