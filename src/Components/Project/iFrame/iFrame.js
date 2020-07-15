import React , {Component} from 'react';
import classes from './iFrame.css';

class iFrame extends Component{
    render(){
        return(
            
            <div className={classes.iFrame}>
                {/* <iframe src={this.props.link} sandbox></iframe> */}
                <a target="_blank" href={this.props.link}>{this.props.children}</a>
            </div>
        )
    }
}

export default iFrame;