import React from 'react';

const Newsitem = (props)=>{

    return(
      <>
         <div className="card my-4">
           <img src={!props.imgUrl?"https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg":props.imgUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text" style={{color:"#929292"}}>By {!props.author?"unknown":props.author}, publish at {new Date(props.publish).toGMTString()}</p>
            <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">view full article</a>
         </div>
        </div>
      </>
      
    )
}

export default Newsitem;