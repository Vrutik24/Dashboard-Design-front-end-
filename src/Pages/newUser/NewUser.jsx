import React from 'react';
import './newUser.css';

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'>
            <div className='newUserItem'>
                <label>Username</label>
                <input type="text" placeholder='john'/>
            </div>
            
            <div className='newUserItem'>
                <label>Full Name</label>
                <input type="text" placeholder='John Smith'/>
            </div>
            
            <div className='newUserItem'>
                <label>Email</label>
                <input type="email" placeholder='john@gmail.com'/>
            </div>
            
            <div className='newUserItem'>
                <label>Password</label>
                <input type="password" placeholder='password'/>
            </div>
            
            <div className='newUserItem'>
                <label>Phone</label>
                <input type="text" placeholder='+1 123 456 78'/>
            </div>
            
            <div className='newUserItem'>
                <label>Address</label>
                <input type="text" placeholder='New York | USA'/>
            </div>

            <div className='newUserItem'>
                <label>Gender</label>
                <div className='userGender'>
                    <input type='radio' name='male' id='male'/>
                    <label htmlFor='male'>Male</label>
                    <input type='radio' name='female' id='female'/>
                    <label htmlFor='female'>Female</label>
                    <input type='radio' name='others' id='others'/>
                    <label htmlFor='others'>Others</label>
                </div>
            </div>

            <div className='newUserItem'>
                <label>Active</label>
                <select className='userSelect'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </div>

            <button className='userFormBtn'>Create</button>

        </form>
    </div>
  )
}
