import React , {Component} from 'react';
import classes from './Details.css';
import Aux from '../../../hoc/Auxiliary'


class Details extends Component{
    render(){
        return(
            <div className={classes.Details}>
                <h3>||
                    <span>
                        {" "+this.props.platform+" "} 
                    </span>
                    ||  
                    <span>
                        {" "+this.props.courseName+" "}
                    </span> 
                    || 
                    <span>
                        {" "+this.props.duration+"~Months "} 
                    </span>
                    ||
                </h3>
                <a href={this.props.link}>Checkout <i class="fas fa-location-arrow"></i></a>
            </div>
        )
    }
}

export default Details;