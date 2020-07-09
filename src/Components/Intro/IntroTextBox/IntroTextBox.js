import React, {Component} from 'react';
import classes from './IntroTextBox.css'


class IntroTextBox extends Component {
    render() {
        return (
            <div className={classes.outerBox}
                    style={{'width': this.props.width}}>
                <div className={classes.box}>
                    <p className={classes.word}
                        style={{'width': this.props.width}}>{this.props.children}</p></div>
            </div>
        )
    }
}

export default IntroTextBox;