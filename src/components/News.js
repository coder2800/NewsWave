import PropTypes from 'prop-types'
import React, { useEffect , useState } from 'react'
import NewsItem1 from './NewsItem1'
import Loading1 from './Loading1';
import InfiniteScroll from 'react-infinite-scroll-component';


let News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalarticles, setTotalarticles] = useState(0)
  const capitalise=(string)=>{
    let ans=string[0].toUpperCase();
    return (ans+string.slice(1));
  }
  
  const update = async() =>{
    props.setprogress(0)
    let url=`https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    props.setprogress(25)
    let data=await fetch(url)
    props.setprogress(50)
    let parseData=await data.json()
    props.setprogress(100)
    setArticles(parseData.articles)
    setLoading(false)
    setTotalarticles(parseData.totalResults)
  }
  useEffect(()=>{
    document.title=`${capitalise(props.category)} - NewsWave`
    update();
    props.setprogress(0)
  }, [])
  // handlePrevClick=async()=>{
  //   setState({page: state.page-1})
  //   update();
  // }
  // handleNextClick=async()=>{
  //   setState({page: state.page+1})
  //   update();
  // }
  const fetchMoreData = async () =>{
    let url=`https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    let data=await fetch(url)
    let parseData=await data.json()
    setArticles(articles.concat(parseData.articles))
    setLoading(false)
    setTotalarticles(parseData.totalResults)
  }
    return (
     <div className='container mx-2' style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "80px"}}>
      <h2 className='my-4 text-center'>NewsWave - Top {capitalise(props.category)} Headlines</h2>
      {loading && <Loading1/>}
      <InfiniteScroll dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalarticles}
          loader={<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><Loading1/></div>}> 
        <div className="row" style={{display: "flex", justifyContent: "space-between", alignItems: "space-between"}}>
          {!loading && articles.map((element)=>{
              return <div key={element.url} className="col md-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <NewsItem1 source={element.source.name} author={element.author==null?"Unknown":element.author} date={element.publishedAt==null?"Unknown":(new Date(element.publishedAt).toGMTString())} title={element.title==null?"":element.title.slice(0,50)} description={element.description==null?"":element.description.slice(0,88)} url={element.urlToImage==null?"https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg":element.urlToImage} newsUrl={element.url}/>
                    </div>
          })}
          
        </div>
      </InfiniteScroll>
      {/* <div className='d-flex justify-content-between' style={{width: "80%", margin: "10px"}}>
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalarticles/props.pageSize)} className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}
    </div>
    )
  }
News.propTypes={
  country: PropTypes.string,
  q: PropTypes.string
}
News.defaultProps={
  country: "",
  q: "",
  pageSize: 10,
  category: "science"
}

export default News