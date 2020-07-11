import React , {Component} from 'react';
import classes from './Section.css';
import LeftArrow from '../../Components/LeftArrow/LeftArrow'
import RightArrow from '../../Components/RightArrow/RightArrow'
import SectionIntro from '../../Components/SectionIntro/SectionIntro';
import arrow from '../../Components/LeftArrow/LeftArrow';
// import Aux from '../../hoc/Auxiliary';

class Section extends Component{
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
        
        let leftFade = false;
        let rightFade = false;
        // let section = <SectionIntro toggle={this.toggleHandler}> {this.props.text} </SectionIntro>;
        let section = null;

        if(this.state.show)
        {   
            if(this.state.index == 0){
                leftFade = true;
            }
            if(this.state.index == this.state.count-1){
                rightFade = true;
            }
            section =   <div className={classes.Section}
                            // style={{'backgroundColor': this.props.back_color, 'backgroundImage': 'url("'+this.props.back_link+'")'}}
                        >
                            <LeftArrow class_Fade={leftFade} handler={this.leftHandler}/>
                            <RightArrow class_Fade={rightFade} handler={this.rightHandler}/>
                            
                            {this.state.frame[this.state.index]}
                        </div>;
        }

        let arrow_class = "fas fa-chevron-down "+classes.down;
        let text = "Expand";
        if(this.state.show){
            text = "Shrink";
            arrow_class = "fas fa-chevron-up "+classes.up ;
        }

        return(
            <div id={this.props.id} className={classes.Container} style={{'backgroundColor':this.props.back_color}}>
                <SectionIntro toggle={this.toggleHandler}> {this.props.text} </SectionIntro>
                <h4 >{text}</h4>
                <div className={classes.arrow}>
                    <a onClick={this.toggleHandler}><i class={arrow_class}></i></a>
                </div>
                {section}
            </div>
        )
    }
}

export default Section;