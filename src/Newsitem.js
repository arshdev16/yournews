import React, { Component } from 'react';

export default class Newsitem extends Component {

  render() {
    let {imgUrl,description, title, newsUrl} = this.props;
    return(
      <>
         <div className="card my-4">
           <img src={!imgUrl?"https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg":imgUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{color:"#929292"}}>By {!this.props.author?"unknown":this.props.author}, publish at {this.props.publish}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">view full article</a>
         </div>
        </div>
      </>
      
    )
  }
}