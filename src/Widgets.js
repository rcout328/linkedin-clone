import React from 'react'
import './Widgets.css';
import { FiberManualRecord, Info } from '@mui/icons-material';
function Widgets1() {

    const newsartical = (heading,subtitle) => (
        <div className='widgets-artical' >
            <div className='widgets-articalleft'>
                <FiberManualRecord/>
                </div>
                <div className='widgets-articalright'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
    );
  return (
    <div className='widgets'>
        <div className='widgets-header'>
            <h2>Linkedin News</h2>
            <Info/>

        </div>
        {newsartical("varun is back in coding world","Top news - 10000 readers")}
        {newsartical("hello","why")}
    </div>
  )
}

export default Widgets1
