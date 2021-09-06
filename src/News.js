import React, { Component } from 'react';
import Newsitem from './Newsitem.js'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ffe09bf15bcc42d9a95d847238847551";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }
 render() {
    return(
      <>
      <div className="container">
       <h3 className="my-4">Today's HeadLines</h3>
       <div className="row d-flex">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4 justify-content-center" key="url">
         <Newsitem title={element.title} imgUrl={element.urlToImage} description={element.description} newsUrl={element.url} />
        </div>
       })}
        
        </div>
        </div>
        <div className="container"></div>
      </>

    )
  }
}