import React, { Component } from "react";
import classes from "./Animation.css";
import Obj from "./Object/Object";

class Animation extends Component {
  render() {
    var jsx = [];
    var h = this.props.height;
    var w = this.props.width;
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        var val = i + j;
        jsx.push(
          <Obj id={"obj" + val} time={40 - val} width="5vw" height="5vh" />
        );
      }
      // jsx.push(<br></br>);
    }
    return (
      <div className={classes.Animation}>
        <div className={classes.Object}>{jsx}</div>
        <div className={classes.children}>{this.props.children}</div>
      </div>
    );
  }
}

export default Animation;
