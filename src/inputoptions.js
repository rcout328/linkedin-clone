import React from 'react'
import "./inputoptions.css";

function InputOptions({Icon,title,color}) {
  return (
    <div className='inputoptions'>
        <Icon  style={{ color: color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOptions