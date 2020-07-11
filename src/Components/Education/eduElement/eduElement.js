import React , {Component} from 'react';
import classes from './eduElement.css';
import Aux from '../../../hoc/Auxiliary';

class EduElement extends Component{
    render(){
        return(
            <Aux>
                <div className={classes.desc}><h1>{this.props.name}</h1></div>
                <div className={classes.desc}><p>{this.props.description1}</p></div>
                <div className={classes.desc}><p>{this.props.description2}</p></div>
            </Aux>
        );
    }
}

export default EduElement;