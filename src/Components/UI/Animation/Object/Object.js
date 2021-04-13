import React, { Component } from "react";
import classes from "./Object.css";

class Obj extends Component {
  render() {
    var time = this.props.time / 2 - 1;

    if (time > 9.5) time = 19 - time;

    console.log(time);

    return (
      <div
        className={classes.Object + " object " + this.props.id}
        style={{
          animationDuration: "9.5s",
          animationDelay: time + "s",
          animationDirection: "alternate",

          width: this.props.width,
          height: this.props.height,
          color: "white",
        }}
      >
        {/* {time} */}
      </div>
    );
  }
}

export default Obj;
