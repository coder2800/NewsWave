import React from 'react'

let NewsItem1 = (props) => {
    let {title, description, url, newsUrl, author, date, source}=props
    return (
        <div className="card mx-2 my-2" style={{width: "18rem"}}>
            
            <img src={url} className="card-img-top" alt="This image is not available in your region..." style={{height: "25vh"}}/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5><span className="badge badge-pill badge-primary bg-primary">{source}</span>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author}, Published at : {date}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
            </div>
        </div>
    )
  }

export default NewsItem1

