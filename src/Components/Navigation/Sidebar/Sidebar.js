import React, {Component} from 'react';
import classes from './Sidebar.css';
// import Hamburger from '../../Hamburger/Hamburger';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavItems from '../NavItems/NavItems';
import Aux from '../../../hoc/Auxiliary';

class Sidebar extends Component{
    
    // state = {
    //     show: false
    // }

    // toggleHandler = ()=>{
    //     this.setState((prev)=>({show: !prev.show}));
    // }

    render(){
        // alert(this.props.show);
        return (
            // <Backdrop show={props.show} clicked={props.cancelPurchase}/>
            <Aux>
                {/* <Hamburger show={!this.state.show} clicked={this.toggleHandler}/> */}
                <div className={classes.sidebar}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
    
                    <NavItems toggle={this.props.toggle}/>    
                </div>
            </Aux>
    
        )
    }
}

export default Sidebar;