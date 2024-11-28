import React, { Component,useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Headline.jsx';
import Spinner from './spinner.jsx';
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
  const update=async()=>{
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      //this.progress=0
      props.setProgress(0);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
     // const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3023c9415d3149b29d2897709d4d4515"
     props.setProgress(30); 
     setLoading(true)
      let data=await fetch(url);
      props.setProgress(70);
      let parsedData=await data.json();
      props.setProgress(90);
      //console.log(parsedData);
      
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
        
      
     // this.progress=100
    // }
    props.setProgress(100)
    
  }
    
  useEffect(() => {
     update();
     // eslint-disable-next-line//to remove the warning that you know and not want to change it
  }, [])
  const handlenextClick=async()=>{
    console.log("next")
    //this.setState({page:this.state.page+1});
    setPage(page+1)
    update()

  }
  const fetchMoreData =async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    
    //this.update()
   
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
      //const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d093053d72bc40248998159804e0e67d"
      //this.setState({loading:true})
      setPage(page+1) 
      let data=await fetch(url);
      let parsedData=await data.json();
      //console.log(parsedData);
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
  };
   
  
    // let {pageSize}=this.props
    console.log("render")
    return (
     
      <div  >
         {/* console.log("render") not executed*/}
         console.log("start");
         <h2   style={{textAlign:"center" ,marginTop: '90px'}}>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
         {loading && <Spinner/>}
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row my-3">
              {articles.map((element)=> {
                 return <div className="col-md-4" key={element.url+element.publishedAt}>
                 <Newsitem  title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} publishedat={element.publishedAt} source={element.source.name}/>
                </div>
              }
                
              )}
          
            </div>    
          </div>
       
        </InfiniteScroll>
      </div>
      
    )
}

News.defaultProps={
  country:"us",
  pageSize:8,
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News
