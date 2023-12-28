import React from 'react'
import "./slidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Slidebar() {
  const user = useSelector(selectUser);
  const recentitem = (topic) => (
    <div className="slidebar-recentitem">
        <span className="slidebar-hash">#</span>
        <p>{topic}</p>
    </div>
  )
  return (
    <div className='slidebar'>
        <div className='slidebar-top'>
        <img  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
        <Avatar  className='slidebar-avatar'/>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>

    <div className='slidebar-status'>

        <div className='status1'>   
            <h5>Who viewed you</h5>
            <h5 className='status11'>2020</h5>
        </div>
        <div className='status1'>   
            <h5>Views on post</h5>
            <h5 className='status11'>1020</h5>
        </div>

    </div>

    <div className='slidebar-bottom'>
        <h5 className='c1'>Recent</h5>
        {recentitem('reactjs')}
        {recentitem('programming')}
        {recentitem('nextjs')}
        {recentitem('angularjs')}
        {recentitem('nodejs')}
    </div>
    </div>


 
  )
}

export default Slidebar
