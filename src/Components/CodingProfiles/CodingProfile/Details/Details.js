import React , {Component} from 'react';
import classes from './Details.css';
import Aux from '../../../../hoc/Auxiliary'


class Details extends Component{
    render(){
        return(
            <div className={classes.Details}>
                <div>
                    <h3>{this.props.platform}</h3>
                    <h4>{this.props.handel}</h4>
                    <h4>{this.props.rank}</h4>
                    <h4>{this.props.max_rating}</h4>
                    <a href={this.props.link}>Checkout</a>
                </div>
            </div>
        )
    }
}

export default Details;