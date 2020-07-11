import React, {Component} from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

class NavItems extends Component{
    render() {

        return (
                <ul className={ classes.NavItems }>
                    <NavItem toggle={this.props.toggle}>About</NavItem>
                    <NavItem toggle={this.props.toggle}>Education</NavItem>
                    <NavItem toggle={this.props.toggle}>Certifications</NavItem>
                    <NavItem toggle={this.props.toggle}>Projects</NavItem>
                    <NavItem toggle={this.props.toggle}>Coding-Profiles</NavItem>
                    <NavItem toggle={this.props.toggle}>Contact Me</NavItem>
                </ul>
        )
    }
}

export default NavItems;