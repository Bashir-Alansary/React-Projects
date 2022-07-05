import React, { useState, useEffect } from 'react';
import rgbToHex from './rgbToHex';

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const[alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert(false);
        }, 2000)
        return()=> clearTimeout(timeOut);
    },[alert])

    return(
        <article 
        className={`color ${index > 10 && 'color-light'}`} 
        style={{backgroundColor: `rgb(${bcg})`}}
        onClick={()=> {
            setAlert(true); 
            navigator.clipboard.writeText(hex);
        }} >
            <p className='precent-value'>{weight}%</p>
            <p className='color-value'>{hex}</p>
            {alert && <p className='alert'>coppied to clipboard</p>}
        </article>
    )
}

export default SingleColor;