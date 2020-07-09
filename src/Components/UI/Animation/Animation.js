import React from 'react';
import classes from './Animation.css';
import Object from './Object/Object';

const Animation = (props)=>{
    let jsx = [];
    let h = props.height;
    let w = props.width;

    for (let i=0; i<1000; i++)
    {
        jsx.push(
            <Object
                key={"obj"+i}
                width="50px"
                height="50px"
            />
        )
    }

    return(
        <div className={classes.Animation}>
            <div className={classes.Object}>
                {jsx}
            </div>
            <div className={classes.children}>
                {props.children}
            </div>
        </div>
    )

}

export default Animation;