import React from 'react';
import NavBar from './components/NavBar';
import Challenges from './Challenges';
import MyProfile from './MyProfile';
import Practice from './Practice';
import Home from './Home';
import MakeChallenge from './MakeChallenge';
import CourseContent from './CourseContent';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path = "/" exact component={Home} />
          <Route path ="/challenges" exact component = {Challenges} />
          <Route path = "/myprofile" exact component={MyProfile} />
          <Route path = "/practice" exact component={Practice} />
          <Route path ="/makechallenge" exact component={MakeChallenge} />
          <Route path ="/coursecontent" exact component={CourseContent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
