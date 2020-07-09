import React, {Component} from 'react';
import classes from './Object.css';

class Obj extends Component{

    state = {
        hover: false,
        color: Math.random()*10 >= 1 ? false : true,
    }

    hoverHandler = ()=>{
        this.setState({hover: true})
        
        setTimeout(()=>{
            this.setState({hover: false})
        }, 1000)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color: Math.random()*10 >= 1 ? false : true})
        }, Math.random()*1000+5000)
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.setState({color: Math.random()*10 >= 1 ? false : true})
        }, Math.random()*1000+5000)
    }

    render(){
        return(
            <div className={classes.Object}
                style={{
                    'backgroundColor': this.state.hover? "rgba(255,255,0,0.3)": this.state.color ?"rgba(255,255,0,0.1)":"transparent",
                    // 'width':this.props.width,
                    // 'height': this.props.height
                }}
                onMouseOver={this.hoverHandler}
            >
    
            </div>
        )
    }
}

export default Obj;