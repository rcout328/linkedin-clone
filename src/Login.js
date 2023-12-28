import React, { useState } from 'react';
import './Login.css';
import { Button, Input } from '@mui/material';
import { login } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import 'firebase/compat/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilepic, setProfilepic] = useState('');
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert('Please enter a full name');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilepic,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilepic,
                    }));
                })
            })
            .catch((error) => alert(error));
    }

    const logintoapp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                }));
            })
            .catch((error) => alert(error));
    }

    return (
        <div className='login'>
            <form className='login-form'>

                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full name (required if registering)' />
                <input value={profilepic} onChange={(e) => setProfilepic(e.target.value)} type='text' placeholder='Photo url (Optional)' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                <button type='submit' onClick={logintoapp}>Sign in</button>
            </form>
            <p>
                Not a Member?
                <span className='login-register' onClick={register}>Register Now</span>
            </p>
        </div>
    );
}

export default Login;
