import React , {Component} from 'react';
import classes from './Details.css';
import Aux from '../../../hoc/Auxiliary'


class Details extends Component{
    render(){
        return(
            <div className={classes.details}>
                <h3>
                    || 
                    <span>
                        {" "+this.props.name+" "} 
                    </span>
                    ||
                </h3>
            </div>
        )
    }
}

export default Details;