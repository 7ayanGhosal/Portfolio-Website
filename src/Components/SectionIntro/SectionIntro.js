import React, { Component } from 'react';
import classes from './SectionIntro.css';


class SectionIntro extends Component{
    

    
    render(){
        return(
            <div className={classes.SectionIntro}>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default SectionIntro;