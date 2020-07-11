import React from 'react';
import classes from './RightArrow.css';

const arrow = (props)=>{
    let x = null;
    // Fading Effect
    // x = props.class_Fade ? classes.Fade : " ";
    return(
        <div className={x+" "+classes.arrow_right}>
            <a onClick={props.handler}><i class={"fas fa-chevron-right "}></i></a>
        </div>
    )
}

export default arrow;