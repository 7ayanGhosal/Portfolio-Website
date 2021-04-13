import React, { Component } from "react";
import classes from "./App.css";
import Layout from "./Containers/Layout/Layout";
import Preloader from "./Components/Preloader/Preloader";

class App extends Component {
  // state = {
  //   preloader: <Preloader/>
  // }

  // preloader = ()=>{
  //   console.log("Loaded!!");
  //   setTimeout(()=>{
  //     this.setState({preloader: <Layout/>})
  //   }, 2000)
  // }

  render() {
    return (
      <div className={classes.App}>
        {/* {this.state.preloader} */}
        <Layout />
      </div>
    );
  }
}

export default App;
