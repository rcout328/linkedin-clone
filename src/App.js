import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Slidebar from './Slidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import 'firebase/compat/auth';
import { auth } from './firebase';
import { Widgets } from '@mui/icons-material';
import Widgets1 from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) =>{
        if(userAuth){
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoUrl,
            })
          );
        }
        else{
             dispatch(logout());
        }
    });
}, [] );
  return (
    
    <div className="app">

        <Header />
      
      
      {
        !user ? ( <Login /> ) : (
        
        <div className='body12'>
        
        <Slidebar/>
        <Feed/>
        <Widgets1/>
      </div>)
          
        
      }
      </div>

      
  );
}

export default App;
