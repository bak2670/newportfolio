import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./component/Contact"
import Intro from "./component/Intro"
import Career from "./component/Career"
import Skill from "./component/Skill"
import Project from "./component/Project"
import OtherProject from "./component/OtherProject"

function App() {
  return (
    <div className="container">
      <Contact/>
      <Intro/>
      {/* <Career/> */}
      <Skill/>
      <Project/>
      <OtherProject/>


    </div>
  );
}

export default App;
