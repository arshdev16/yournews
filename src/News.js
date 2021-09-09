import React, { Component } from 'react';
import Newsitem from './Newsitem.js'
import PropTypes from 'prop-types'

export default class App extends Component {
  
  static defaultProps = {
    country: "in",
    newsPerPage: 12,
    category: "general"
  }
  static propTypes = {
    country : PropTypes.string,
    newsPerPage : PropTypes.number,
    category : PropTypes.string
  }
  
  
  constructor(){
    super();
    this.state = {
      articles: [],
      page: 1
    }
  }
  
  
  onPrev = async ()=>{
    this.props.setProgress(15)
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=ffe09bf15bcc42d9a95d847238847551&pageSize=${this.props.newsPerPage}&page=${this.state.page - 1}`;
     let data = await fetch(url);
     this.props.setProgress(35)
     let parsedData = await data.json();
     this.props.setProgress(75)
     this.setState({page: this.state.page - 1,articles: parsedData.articles, total: parsedData.totalResults})
     this.props.setProgress(100)
  }
  
  onNext = async ()=>{
    this.props.setProgress(15)
     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=ffe09bf15bcc42d9a95d847238847551&pageSize=${this.props.newsPerPage}&page=${this.state.page + 1}`;
     let data = await fetch(url);
     this.props.setProgress(35)
     let parsedData = await data.json();
     this.props.setProgress(75)
     this.setState({page: this.state.page + 1,articles: parsedData.articles, total: parsedData.totalResults})
     this.props.setProgress(100)
  }
  
  async componentDidMount(){
    this.props.setProgress(15)
     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=ffe09bf15bcc42d9a95d847238847551&pageSize=${this.props.newsPerPage}&page=1`;
     let data = await fetch(url);
     this.props.setProgress(35)
     let parsedData = await data.json();
     this.props.setProgress(75)
     this.setState({articles: parsedData.articles, total: parsedData.totalResults})
     this.props.setProgress(100)
   }
  
 render() {
    return(
      <>
      <div className="container">
       <h3 className="my-4">Today's HeadLines</h3>
       <div className="row">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4" key={this.state.articles.url}>
         <Newsitem title={element.title} imgUrl={element.urlToImage} author={element.author} publish={element.publishedAt} description={element.description} newsUrl={element.url} />
        </div>
       })}
       </div>
       <div className="container my-3 d-flex justify-content-between">
        <button disabled={this.state.page<=1} onClick={this.onPrev} type="button" class="btn btn-secondary">&#8592; previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.total/this.props.newsPerPage)} onClick={this.onNext} type="button" class="btn btn-secondary">next &#8594;</button>
      </div>
    </div>
  </>

    )
  }
}