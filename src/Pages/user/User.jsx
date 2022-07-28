import React from 'react';
import Paper from '@mui/material/Paper';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
  return (
    <div className='user'>
      <div className='userEditUpdateTitle'>
        <span className='userEditTitle'>Edit User</span>
        <Link to='/newUser'>
          <button className='userCreateBtn'>Create</button>
        </Link>
      </div>
      <div className='userInfoEditPaper'> 
        <div className='userInfoPaper'> 
          <Paper elevation={6} sx= {{height : 400}}>
            <div className='userProfileInfo'>
              <img src='https://img.bleacherreport.net/img/images/photos/003/802/730/hi-res-8b43a586d3d4d40c2bd1dc1e0da13fe6_crop_exact.jpg?w=3072&h=2048&q=75' alt='Steph' className='userInfoImg'/>
              <div className='userNameJobInfo'>
                <span className='userName'>Anna Becker</span>
                <span className='userJob'>Software Developer</span>
              </div>
            </div>  
            <div className='userAccountDetails'>
              <span className='userAccount'>Account Details</span>
              <div className='userUserName'>
                <PersonOutlineIcon className='userInfoIcon'/>
                <span className='userUserName99'>annabeck99</span>
              </div>
              <div className='userUserName'>
                <CalendarTodayIcon className='userInfoIcon'/>
                <span className='userUserName99'>10.12.1999</span>
              </div>
            </div>

            <div className='userAccountDetails'>
              <span className='userAccount'>Contact Details</span>
              <div className='userUserName'>
                <PhoneAndroidIcon className='userInfoIcon'/>
                <span className='userUserName99'>+1 123 456 67</span>
              </div>
              <div className='userUserName'>
                <MailOutlineIcon className='userInfoIcon'/>
                <span className='userUserName99'>annabeck99@gmail.com</span>
              </div>
              <div className='userUserName'>
                <LocationSearchingIcon className='userInfoIcon'/>
                <span className='userUserName99'>New York | USA</span>
              </div>
            </div>
            
          </Paper>
        </div>
        
        
        <div className='userEditPaper'>
          <Paper elevation={6} sx= {{height : 400}}>
            <div className='userEditPaperMain'>
              <span className='userEditTitle'>Edit</span>
              <div className='userFormProfile'>
                <div className='userFormLeft'>
                  <form className='userForm'>
                    <label>Username</label>
                    <input type='text' placeholder='annabeck99'/>
                    <label>Full Name</label>
                    <input type='text' placeholder='Anna Beck'/>
                    <label>Email</label>
                    <input type='text' placeholder='annabeck99@gmail.com'/>
                    <label>Phone</label>
                    <input type='text' placeholder='+1 123 456 67'/>
                    <label>Address</label>
                    <input type='text' placeholder='New York | USA'/>
                  </form>

                </div>


                <div className='userFormRight'>
                  <div className='userPPChange'>
                    <img src='https://img.bleacherreport.net/img/images/photos/003/802/730/hi-res-8b43a586d3d4d40c2bd1dc1e0da13fe6_crop_exact.jpg?w=3072&h=2048&q=75' alt='Steph' className='pPicture'/> 
                    <PublishIcon/>
                  </div>
                  <button className='userUpdateBtn'>Update</button>
                </div>

              </div>
            </div>
          </Paper>
        </div>



      </div>
    </div>
  )
}
