import React, { Component } from 'react';
import Newsitem from './Newsitem.js'

export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  onPrev = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ffe09bf15bcc42d9a95d847238847551&pageSize=18&page=${this.state.page}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles, page: this.state.page - 1})
      
      
    }
  
  parse = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ffe09bf15bcc42d9a95d847238847551&pageSize=18&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    
  }
      
  
  parse = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ffe09bf15bcc42d9a95d847238847551&pageSize=18&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }
  
  async componentDidMount(){
    this.parse();
  }
  
 render() {
    return(
      <>
      <div className="container">
       <h3 className="my-4">Today's HeadLines</h3>
       <div className="row d-flex justify-content-evenly">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4 justify-content-center" key="url">
         <Newsitem title={element.title} imgUrl={element.urlToImage} description={element.description} newsUrl={element.url} />
        </div>
       })}
        
        </div>
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} onClick={this.onPrev} type="button" class="btn btn-secondary">&#8592; previous</button>
        <button onClick={this.onNext} type="button" class="btn btn-secondary">next &#8594;</button>
        </div>
      </>

    )
  }
}