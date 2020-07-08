import React , {Component} from 'react';
import classes from './Image.css';
import Aux from '../../../../hoc/Auxiliary'


class Image extends Component{
    render(){
        return(
            
            <div className={classes.Image}>
                <img src={this.props.path} />
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Image;