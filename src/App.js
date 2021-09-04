import React, { Component } from 'react';
import Navbar from './Navbar.js';
import News from './News.js';

export default class App extends Component {

  render() {
    return(
      <>
        <Navbar />
        <News />
      </>
    )
  }
}