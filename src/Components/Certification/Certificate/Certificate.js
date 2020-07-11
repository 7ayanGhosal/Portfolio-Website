import React , {Component} from 'react';
import classes from './Certificate.css';

class Image extends Component{
    render(){
        return(
            
            <div className={classes.Image}>
                <img src={this.props.path} />
                <a href={this.props.link}>{this.props.children}</a>
            </div>
        )
    }
}

export default Image;