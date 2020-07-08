import React, { Component } from 'react';
import Intro from './Components/Intro/Intro';
import classes from './App.css';
import Mail from './Components/Mail/Mail';
import Ribbon from './Components/Ribbon/Ribbon';
import Hamburger from './Components/Hamburger/Hamburger';
import ProfilePic from './Components/ProfilePic/ProfilePic';
import Navbar from './Components/Navigation/Navbar/Navbar';
import CodingProfiles from './Components/CodingProfiles/CodingProfiles';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        {/* <Navbar/> */}
        {/* <ProfilePic/> */}
        {/* <Intro /> */}
        {/* <Mail/> */}
        {/* <Ribbon/> */}
        {/* <Hamburger/> */}
        <CodingProfiles/>



        {/* <div id="About" className={classes.section}><div>About</div></div>
        <div id="Education" className={classes.section}><div>Education</div></div>
        <div id="Certifications" className={classes.section}><div>Certifications</div></div>
        <div id="Projects" className={classes.section}><div>Projetcs</div></div> */}
        {/* <div id="Coding-Profiles" className={classes.section}><div>Coding-profiles</div></div> */}
      </div>
    );
  }
}

export default App;
