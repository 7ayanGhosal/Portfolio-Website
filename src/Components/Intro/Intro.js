import React, {Component} from 'react';
import classes from './Intro.css'
import IntroTextBox from './IntroTextBox/IntroTextBox';

class Intro extends Component {
    state = {
        words : ["MERN Stack Web Developer", "Competitive Programmer...."]
    }

    render(){
        return (
            <div className={classes.Intro}>
                <h1 style={{'color': 'tomato'}} >Hi.</h1>
                <h1 style={{'color': 'tomato'}} >I'm Ayan,</h1>
                <IntroTextBox >
                    {this.state.words[0]}
                </IntroTextBox>
                <IntroTextBox >
                    {this.state.words[1]}
                </IntroTextBox>
            </div>
        );
    }
}

export default Intro;