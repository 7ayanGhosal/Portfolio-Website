import React from 'react';
import classes from './RightArrow.css';

const arrow = (props)=>{
    return(
        <div className={props.class}>
            <a onClick={props.handler}><i class={"fas fa-chevron-right "}></i></a>
        </div>
    )
}

export default arrow;