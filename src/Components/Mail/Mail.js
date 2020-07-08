import React, {Component} from 'react';
import classes from './Mail.css';
class Mail extends Component{
    render(){
        return(
            <div className={classes.Mail}>
                <a>
                    <i className={"far fa-envelope "} ></i>
                </a>
                
            </div>
        )
    }
}

export default Mail;