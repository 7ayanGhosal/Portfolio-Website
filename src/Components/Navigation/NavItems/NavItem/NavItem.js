import React, {Component} from 'react';
import classes from './NavItem.css';

class NavItem extends Component{
    render() {
        return (
            <li className={classes.NavItem}
                onClick={this.props.toggle}
                ><a href={"#"+this.props.children}  ><h4>{this.props.children}</h4></a></li>
        )
    }
}

export default NavItem;