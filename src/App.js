import React, { Component } from 'react';
import Navbar from './Navbar.js';
import News from './News.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {

  render() {
    return(
      <>
        <Router>
        <Navbar />
        <Switch>
        <Route key="general" exact path="/"><News category="general"/></Route>
        <Route key="business" exact path="/business"><News category="business"/></Route>
        <Route key="entertainment" exact path="/entertainment"><News category="entertainment"/></Route>
        <Route key="health" exact path="/health"><News category="health"/></Route>
        <Route key="science" exact path="/science"><News category="science"/></Route>
        <Route key="sports" exact path="/sports"><News category="sports"/></Route>
        <Route key="technology" exact path="/technology"><News category="technology"/></Route>
        </Switch>
    </Router>
    
      </>
    )
  }
}