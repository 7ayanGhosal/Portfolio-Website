import React, {Component} from 'react';
import classes from './NavItem.css';

class NavItem extends Component{
    render() {
        return (
            <li className={classes.NavItem}><a href={"#"+this.props.children}  >{this.props.children}</a></li>
        )
    }
}

export default NavItem;