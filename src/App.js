import React, { Component } from 'react';
import Navbar from './Navbar.js';
import News from './News.js';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {

 state = {
   progress: 0
 }
 setProgress = (progress)  =>{
   this.setState({progress:progress})
 }
 
  render() {
    return(
      <>
        <Router>
        <LoadingBar color='#f11946' progress={this.state.progress}/>
        <Navbar />
        <Switch>
        <Route key="general" exact path="/"><News setProgress={this.setProgress} category="general"/></Route>
        <Route key="business" exact path="/business"><News setProgress={this.setProgress} category="business"/></Route>
        <Route key="entertainment" exact path="/entertainment"><News setProgress={this.setProgress} category="entertainment"/></Route>
        <Route key="health" exact path="/health"><News setProgress={this.setProgress} category="health"/></Route>
        <Route key="science" exact path="/science"><News setProgress={this.setProgress} category="science"/></Route>
        <Route key="sports" exact path="/sports"><News setProgress={this.setProgress} category="sports"/></Route>
        <Route key="technology" exact path="/technology"><News setProgress={this.setProgress} category="technology"/></Route>
        </Switch>
    </Router>
    
      </>
    )
  }
}