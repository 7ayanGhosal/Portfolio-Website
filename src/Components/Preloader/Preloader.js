import React from 'react';
import classes from './Preloader.css';

const preloader = (props)=>{
    return(
        <div className={classes.LoaderDiv}>
            <div className={classes.loader}>Loading...</div>
        </div>
    )
}

export default preloader;