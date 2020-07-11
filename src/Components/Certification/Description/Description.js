import React from 'react';
import classes from './Description.css';


const description = (props)=>{
    return (
        <div className={classes.description}>
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default description;