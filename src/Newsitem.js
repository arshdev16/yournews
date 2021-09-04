import React, { Component } from 'react';

export default class Newsitem extends Component {

  render() {
    let {imgUrl,description} = this.props;
    return(
      <>
         <div className="card my-4" style={{width: "18rem"}}>
           <img src={imgUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-success">Go somewhere</a>
         </div>
        </div>
      </>
      
    )
  }
}