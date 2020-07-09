import React, {Component} from 'react';
import classes from './Object.css';

class Obj extends Component{

    state = {
        hover: false
    }

    hoverHandler = ()=>{
        this.setState({hover: true})
        
        setTimeout(()=>{
            this.setState({hover: false})
        }, 1000)
    }

    render(){
        return(
            <div className={classes.Object}
                style={{
                    'backgroundColor': this.state.hover? "rgba(255,215,0,0.1)":"transparent",
                    'width':this.props.width,
                    'height': this.props.height
                }}
                onMouseOver={this.hoverHandler}
            >
    
            </div>
        )
    }
}

export default Obj;