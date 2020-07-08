import React, {Component} from 'react';
import classes from './Navbar.css';
import NavItems from '../NavItems/NavItems';
import NavItem from '../NavItems/NavItem/NavItem';

class Navbar extends Component{
    render() {

        return (
                <nav className={ classes.Navbar }>
                    <NavItems/>
                </nav>
        )
    }
}

export default Navbar;