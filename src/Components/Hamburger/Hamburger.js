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
        } else {
            this.setState({menuOpen : false, class : [classes.menu_btn] })
        }

        this.props.clicked();
    }

    render(){
        return(
            <Aux>
                <Backdrop show={this.state.menuOpen}/>
                <div 
                    className={ this.state.class.join(' ') } 
                    onClick={this.hamburgerClickHandler}
                    style={{'display': this.state.menuOpen ?'block': ''}}
                >    
                    <div className={classes.menu_btn__burger}
                        style={{'display': this.state.menuOpen ?'block': ''}}></div>
                </div>
            </Aux>
        )
    }
}

export default Hamburger;