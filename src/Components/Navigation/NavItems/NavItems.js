import React, {Component} from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

class NavItems extends Component{
    render() {

        return (
                <ul className={ classes.NavItems }>
                    <NavItem>About</NavItem>
                    <NavItem>Education</NavItem>
                    <NavItem>Certifications</NavItem>
                    <NavItem>Projects</NavItem>
                    <NavItem>Coding-Profiles</NavItem>
                    <NavItem>Contact Me</NavItem>
                </ul>
        )
    }
}

export default NavItems;