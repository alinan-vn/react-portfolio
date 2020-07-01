import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.scss';

import Landing from './components/landing/index';
import About from './components/about/index';
import Projects from './components/projects/index';
import Contact from './components/contact/index';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    )
  }
}

export default App