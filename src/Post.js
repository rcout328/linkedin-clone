import React, {forwardRef} from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import InputOptions from './inputoptions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const  Post = forwardRef( ({name , description , message , photourl},ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post-header'>
           <Avatar src={photourl} >{name[0]}</Avatar>
            <div className='post-info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post-body'>
                <h2>{message}</h2>
        </div>

        <div className='post-buttons'>
                <InputOptions Icon={FavoriteBorderIcon} title="Like" color="gray"/>
                <InputOptions Icon={ModeCommentIcon} title="Comments" color="gray"/>
                <InputOptions Icon={ShareIcon} title="Share" color="gray"/>
                <InputOptions Icon={SendIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
})

export default Post