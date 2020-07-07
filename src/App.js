import React, { Component } from 'react';
import Intro from './Components/Intro/Intro';
import classes from './App.css';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Intro />
      </div>
    );
  }
}

export default App;
