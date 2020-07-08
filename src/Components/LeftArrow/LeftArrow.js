import React from 'react';
import classes from './LeftArrow.css';

const arrow = (props)=>{
    return(
        <div className={props.class}>
            <a onClick={props.handler}><i class={"fas fa-chevron-left "}></i></a>
        </div>
    )
}

export default arrow;