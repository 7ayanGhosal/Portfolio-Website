import React from 'react';
import classes from './LeftArrow.css';

const arrow = (props)=>{
    let x = props.class_Fade ? classes.Fade : " ";
    return(
        <div className={x+" "+classes.arrow_left}>
            <a onClick={props.handler}><i class={"fas fa-chevron-left "}></i></a>
        </div>
    )
}

export default arrow;