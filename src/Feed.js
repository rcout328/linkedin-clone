import React, { useEffect, useState,forwardRef } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './inputoptions';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const [input1, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser)

    useEffect(() => {
        const unsubscribe = db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

        return () => {
            // Unsubscribe from the snapshot listener when component unmounts
            unsubscribe();
        };
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input1,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput(''); // Clear the input after sending the post
    };

    return (
        <div className="feed">
            <div className="feed-inputcontainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input value={input1} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed-inputoptions">
                    <InputOptions Icon={AddToPhotosIcon} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={OndemandVideoIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={ArticleIcon} title="Write Article" color="#70B5F9" />
                </div>
            </div> 
            <FlipMove>
            {posts.map(({id,data: {name,description,message,photoUrl,timestamp}}) => ( 
            <Post key={id} name={name} description={description} message={message} photourl={photoUrl} timestamp={timestamp} />
        ))}
        </FlipMove>
        </div>
    );
}

export default Feed;
