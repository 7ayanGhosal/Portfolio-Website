import React, {Component} from 'react';
import './Intro.css'
import IntroTextBox from './IntroTextBox/IntroTextBox';

class Intro extends Component {
    state = {
        words : ["Web Developer", "Competitive Programmer"]
    }

    render(){
        return (
            <div>
                <h1>Hi.</h1>
                <h1>I'm Ayan,</h1>
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