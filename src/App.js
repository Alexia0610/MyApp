import React from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Volunteering from './components/Volunteering';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/volunteering" component={Volunteering} />
          <Route path="/search" component={Search} />
          <Route path="/results" component={Results} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
