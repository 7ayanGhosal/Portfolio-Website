import React, {Component} from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './Hamburger.css';
import Aux from '../../hoc/Auxiliary';

class Hamburger extends Component{

    state = {
        menuOpen : false,
        class: [classes.menu_btn]
    }

    hamburgerClickHandler = ()=>{
        if(!this.state.menuOpen) {
            this.setState( {menuOpen : true, class : [classes.menu_btn , classes.open] })
            // alert("Open")
            // menuBtn.classList.add('open');
        } else {
            // menuBtn.classList.remove('open');
            this.setState({menuOpen : false, class : [classes.menu_btn] })
        }
    }

    render(){
        console.log(this.state.class.join(' '));
        return(
            <Aux>
                <Backdrop show={this.state.menuOpen}/>
                <div className={ this.state.class.join(' ') } onClick={this.hamburgerClickHandler}>
                    <div className={classes.menu_btn__burger}></div>
                </div>
            </Aux>
        )
    }
}

export default Hamburger;