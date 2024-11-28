import React, { Component } from 'react'

const Newsitem=(props)=> {
    let {title,description,imageurl,url,author,publishedat,source}=props;
    return (
      <div className='my-3'>
        {/* <div className="card" style={{width: "18"}}> */}
        <div className="card" >
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
              }
              }>
              <span className="badge rounded-pill bg-danger"> {source} </span>
              </div>
            
              <img src={imageurl?imageurl:"https://images.moneycontrol.com/static-mcnews/2023/06/stocks5-10-770x433.jpg"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}...
        {/* <span className="position-absolute top-0  translate-middle badg rounded-pill bg-danger" style={{left:250,zIndex:'1'}}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span></h5> */}
                </h5> 
                <p className="card-text">{description}...</p>
                {/* <p className="card-text" ><small className="text-body-secondary" style={{color:"red"}}>published by{author} at {publishedat}</small></p>//in next line we are removing a class that is for setting a color */}
                <p className="card-text" ><small  style={{color:"brown"}}>published by {author?author:"unknown"} at {Date(publishedat)}</small></p>
                <a href={url} target="_blank" className="btn btn-primary">Open</a>
                {/* target="_blank"//to open in a new tab */}
              </div>
            </div>
      </div>
    )
  }

export default Newsitem
