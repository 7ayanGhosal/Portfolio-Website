import React , {Component} from 'react';
import classes from './Details.css';
import Aux from '../../../../hoc/Auxiliary'


class Details extends Component{
    render(){
        return(
            <div className={classes.Details}>
                {/* <div> */}
                    <h3>||
                        <span>
                            {" "+this.props.platform+" "} 
                        </span>
                        || Handle:  
                        <span>
                            {" "+this.props.handel+" "}
                        </span> 
                        || Max: 
                        <span>
                            {" "+this.props.max_rating}, 
                        </span>
                        <span>
                            {" ("+this.props.rank+") "}
                        </span>
                        ||
                    </h3>

                    <a href={this.props.link}>Checkout</a>
                {/* </div> */}
            </div>
        )
    }
}

export default Details;