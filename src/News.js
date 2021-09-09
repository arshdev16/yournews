import React, { useState , useEffect } from 'react';
import Newsitem from './Newsitem.js'
import PropTypes from 'prop-types'

const News = (props)=>{
  
  const [articles,setArticles] = useState([]);
  const [page,setPage] = useState(1);
  const [total,setTotal] = useState(0);
  
  
  
  
  const onPrev = async ()=>{
    props.setProgress(15)
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.key}&pageSize=${props.newsPerPage}&page=${page - 1}`;
     let data = await fetch(url);
     props.setProgress(35)
     let parsedData = await data.json();
     props.setProgress(75)
     setPage(page - 1);
     setArticles(parsedData.articles);
     setTotal(parsedData.totalResults);
     props.setProgress(100)
     props.setProgress(100)
  }
  
  const onNext = async ()=>{
    props.setProgress(15)
     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=${props.key}&pageSize=${props.newsPerPage}&page=${page + 1}`;
     let data = await fetch(url);
     props.setProgress(35)
     let parsedData = await data.json();
     props.setProgress(75)
     setPage(page + 1);
     setArticles(parsedData.articles);
     setTotal(parsedData.totalResults);
     props.setProgress(100)
  }
  
  useEffect( async ()=> {
    const getNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.key}&page=${props.page}&pageSize=${props.newsPerPage}`; 
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotal(parsedData.totalResults)
        props.setProgress(100);
}
getNews();
   },[articles,total]);
  
    return(
      <>
      <div className="container">
       <h3 className="my-4">Today's HeadLines</h3>
       <div className="row">
        {articles?articles.map((element)=>{
         return <div className="col-md-4" key={articles.url}>
         <Newsitem title={element.title} imgUrl={element.urlToImage} author={element.author} publish={element.publishedAt} description={element.description} newsUrl={element.url} />
        </div>
       }) : ""}
       </div>
       <div className="container my-3 d-flex justify-content-between">
        <button disabled={page<=1} onClick={onPrev} type="button" class="btn btn-secondary">&#8592; previous</button>
        <button disabled={page + 1 > Math.ceil(total/props.newsPerPage)} onClick={onNext} type="button" class="btn btn-secondary">next &#8594;</button>
      </div>
    </div>
  </>

    )
}

News.defaultProps = {
    country: "in",
    newsPerPage: 12,
    category: "general"
  }
News.propTypes = {
    country : PropTypes.string,
    newsPerPage : PropTypes.number,
    category : PropTypes.string
  }
  

export default News;