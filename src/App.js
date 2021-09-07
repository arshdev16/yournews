import React, { Component } from 'react';
import Navbar from './Navbar.js';
import News from './News.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {

  render() {
    return(
      <>
      <Router>
       <Navbar />
        <Switch>
          <Route exact path="/buisness">
            <News category="business"/>
          </Route>
          <Route exact path="/entertainment">
            <News category="entertainment"/>
          </Route>
          <Route exact path="/general">
            <News category="general"/>
          </Route>
          <Route exact path="/health">
            <News category="health"/>
          </Route>
          <Route exact path="/science">
            <News category="science"/>
          </Route>
          <Route exact path="/sports">
            <News category="sports"/>
          </Route>
          <Route exact path="/technology">
            <News category="technology"/>
          </Route>
        </Switch>
    </Router>
  </>
    )
  }
}