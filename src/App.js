import React, { useState } from 'react';
import Navbar from './Navbar.js';
import News from './News.js';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () =>{

 const[progress,setProgress] = useState(0);
 
 
    return(
      <>
        <Router>
        <LoadingBar color='#f11946' progress={progress}/>
        <Navbar />
        <Switch>
        <Route key="general" exact path="/"><News setProgress={setProgress} category="general"/></Route>
        <Route key="business" exact path="/business"><News setProgress={setProgress} category="business"/></Route>
        <Route key="entertainment" exact path="/entertainment"><News setProgress={setProgress} category="entertainment"/></Route>
        <Route key="health" exact path="/health"><News setProgress={setProgress} category="health"/></Route>
        <Route key="science" exact path="/science"><News setProgress={setProgress} category="science"/></Route>
        <Route key="sports" exact path="/sports"><News setProgress={setProgress} category="sports"/></Route>
        <Route key="technology" exact path="/technology"><News setProgress={setProgress} category="technology"/></Route>
        </Switch>
    </Router>
    
      </>
    )
}

export default App;