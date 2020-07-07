import React, {Component} from 'react';
import classes from './IntroTextBox.css'


class IntroTextBox extends Component {
    render() {
        return (
            <div className={classes.outerBox}>
                <div className={classes.box}>
                    <p className={classes.word}>{this.props.children}</p></div>
            </div>
        )
    }
}

export default IntroTextBox;