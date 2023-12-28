import React from 'react';
import "./headeroption.css";
import { Avatar } from '@mui/material';

function HeaderOption({avatar,Icon,title}) //props
{
  return (
    <div className='headeroption'>

        {Icon && <Icon className="headeroption-icon"/>}
        {avatar && <Avatar className='headeroption-icon' src={avatar}/>}
        <h3 className='headeroption-title'>{title}</h3>
        
         
      
    </div>
  )
}

export default HeaderOption
