import React, { Component } from 'react';
import Newsitem from './Newsitem.js'

export default class App extends Component {
  
 render() {
    return(
      <>
      <div className="container">
       <h3 className="my-4">Today's HeadLines</h3>
       <div className="row">
        <div className="col">
         <Newsitem imgUrl="https://cdn.pixabay.com/photo/2021/04/29/05/03/desert-6215514_1280.jpg" description="bulk text to fill up the space" />
        </div>
        <div className="col">
         <Newsitem imgUrl="https://cdn.pixabay.com/photo/2021/04/29/05/03/desert-6215514_1280.jpg" description="bulk text to fill up the space" />
        </div>
        <div className="col"> 
        <Newsitem imgUrl="https://cdn.pixabay.com/photo/2021/04/29/05/03/desert-6215514_1280.jpg" description="bulk text to fill up the space"/>
        </div>
      </div>
      <div className="row">
        <div className="col">
         <Newsitem imgUrl="https://cdn.pixabay.com/photo/2021/04/29/05/03/desert-6215514_1280.jpg" description="bulk text to fill up the space"/>
        </div>
        <div className="col">
         <Newsitem imgUrl="https://cdn.pixabay.com/photo/2021/04/29/05/03/desert-6215514_1280.jpg" description="bulk text to fill up the space"/>
        </div>
        <div className="col"> 
        <Newsitem imgUrl="https://cdn.pixabay.com/photo/2021/04/29/05/03/desert-6215514_1280.jpg" description="bulk text to fill up the space"/>
        </div>
      </div>
      </div> 
      < />

    )
  }
}