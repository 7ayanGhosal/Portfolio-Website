import React, {Component} from 'react';
import './IntroTextBox.css'


class IntroTextBox extends Component {
    
    render() {
        return (
            <div><p class="word">{this.props.children}</p></div>
        )
    }
}

export default IntroTextBox;