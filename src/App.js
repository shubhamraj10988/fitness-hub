import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import GymProgram from "./components/GymProgram/GymProgram";
import Member from "./components/Member/Member";
import Classes from "./components/OurClasses/Classes";
import Schedule from "./components/Schedule/Schedule";
import Trainers from "./components/Trainers/Trainers";
import Contact from './components/Contact/Contact';
// import Login from './components/Login/Login.js'
import {Router, Redirect, Route} from 'react-router-dom'

const App = () => (
  <div className="App">
    {/* <switch> */}
  {/* <Route path="/Login"> */}
    {/* <Redirect to="/App"/> */}
    {/* <Login /> */}
  {/* </Route> */}
     {/* <Route path="/App"> */}
    <Main />
    <GymProgram />
    <Member />
    <Classes />
    <Schedule />
    <Trainers />
    <Contact />
  {/* </Route> */}
  {/* </switch> */}
  </div>
);

export default App;
