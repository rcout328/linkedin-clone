import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Chat, PeopleAlt } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import Work from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutapp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      
      <div className="header-left">

        <img className="img1" onClick={logoutapp} src='https://svgshare.com/i/11FE.svg'/>

        <div className="header-search">
        <SearchIcon/>
        <input className="input1" type="text" placeholder='Search'/>
        </div>


      </div>
      
      <div className="header-right">

        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={PeopleAlt} title="My network"/>
        <HeaderOption Icon={Work} title="Jobs"/>
        <HeaderOption Icon={Chat} title="Messaging"/>
        <HeaderOption Icon={PeopleAlt} title="Notification"/>
        <HeaderOption  avatar="https://svgshare.com/i/11FE.svg" title="Me"/>
      </div>
      
    </div>
  )
}

export default Header
