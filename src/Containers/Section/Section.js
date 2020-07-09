import React , {Component} from 'react';
import classes from './Section.css';
import LeftArrow from '../../Components/LeftArrow/LeftArrow'
import RightArrow from '../../Components/RightArrow/RightArrow'

class Section extends Component{
    state = {
        frame: this.props.frames,
        index: 0,
        count: this.props.count
    }

    leftHandler = ()=>{
        if (this.state.index != 0)
        {
            this.setState((prev)=>({index: prev.index-1}))
        }
    }

    rightHandler = ()=>{
        if (this.state.index != this.state.count-1)
        {
            this.setState((prev)=>({index: prev.index+1}))
        }
    }

    render(){
        let leftFade = false;
        let rightFade = false;
        if(this.state.index == 0){
            leftFade = true;
        }
        if(this.state.index == this.state.count-1){
            rightFade = true;
        }

        return(
            <div id={this.props.id} 
                className={classes.Section} 
                style={{'backgroundColor': this.props.back_color, 'backgroundImage': 'url("'+this.props.back_link+'")'}}>
                
                <LeftArrow class_Fade={leftFade} handler={this.leftHandler}/>
                <RightArrow class_Fade={rightFade} handler={this.rightHandler}/>
                
                {this.state.frame[this.state.index]}
            </div>
        )
    }
}

export default Section;