import React , {Component} from 'react';
import classes from './Education.css';
import LeftArrow from '../LeftArrow/LeftArrow'
import RightArrow from '../RightArrow/RightArrow'
import SectionIntro from '../SectionIntro/SectionIntro';
import EduElement from './eduElement/eduElement';

class Education extends Component{
    
    state = {
        // false => show intro
        show: false,
        frame: this.props.frames,
        index: 0,
        count: this.props.count
    }

    leftHandler = ()=>{
        if (this.state.index != 0)
        {
            this.setState((prev)=>({index: prev.index-1}))
        }
        else{
            this.setState({index: this.state.count-1});
        }
    }

    rightHandler = ()=>{
        
        if (this.state.index != this.state.count-1)
        {
            this.setState((prev)=>({index: prev.index+1}))
        }
        else{
            this.setState({index: 0});
        }
    }

    toggleHandler = ()=>{
        this.setState((prev)=>({show: !prev.show}))
    }
    
    render(){

        let arrow_class = "fas fa-chevron-down "+classes.down;
        let text = "Expand";
        if(this.state.show){
            text = "Shrink";
            arrow_class = "fas fa-chevron-up "+classes.up ;
        }
        
        let education = null;
        if(this.state.show)
        {
            education =     <div className={classes.education} id={this.props.id}>
                                <LeftArrow  handler={this.leftHandler}/>
                                <RightArrow handler={this.rightHandler}/>
                                {this.state.frame[this.state.index]}
                            </div>
        }
        return(

            <div id={this.props.id} className={classes.Container} style={{'backgroundColor':this.props.back_color}}>
                <SectionIntro toggle={this.toggleHandler}> {this.props.text} </SectionIntro>
                <h4 >{text}</h4>
                <div className={classes.arrow}>
                    <a onClick={this.toggleHandler}><i class={arrow_class}></i></a>
                </div>
                {education}
            </div>

        )
    }
}

export default Education;