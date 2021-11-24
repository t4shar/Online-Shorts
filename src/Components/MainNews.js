import React, { Component } from 'react'
import Insider from './Insider'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class MainNews extends Component {
  static defaultProps={
    pageSize: 6,
    country:'in',
    category:'general'
  }
  static propTypes = {
    pageSize:PropTypes.number,
    country:PropTypes.string,
    category:PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=84ca71f8faba4335927f42b7a1b6b667&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    this.props.setProgress(30); 
    let data = await fetch(Url);
    let parseddata = await data.json();
    this.props.setProgress(75);
    this.setState({ articles: parseddata.articles,
      totalNews: parseddata.totalResults,
      loading:false});
      this.props.setProgress(100);
    }
    
    
    HandleUpPrevious = async () => {
      
    this.props.setProgress(10);
    console.log("this is something")
    let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=84ca71f8faba4335927f42b7a1b6b667&page= ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    this.props.setProgress(35);
    let data = await fetch(Url);
    let parseddata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading:false
    })
    this.props.setProgress(100);
    
      
  }
  HandleUpNext = async () => {
    this.props.setProgress(10);
    console.log("this is something")
    if ( !(this.state.page + 1 > Math.ceil(this.props.totalResults / this.props.pageSize))) {
      let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=84ca71f8faba4335927f42b7a1b6b667&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.props.setProgress(35);
      this.setState({loading:true})
      let data = await fetch(Url);
      let parseddata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading:false
      })
      this.props.setProgress(100);
  }
  }
  render() {
    return (
      <div className=" container">
        <h1 className="text-center" style={this.props.mode === 'light' ? {color:'black'} : {color:'white'}} >Today's Headlines-{this.props.category}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row ">
          {  !this.state.loading && this.state.articles.map((elele) => {
            return <div className="col-md-4" key={elele.url}>
              <Insider mode={this.props.mode} title={elele.title ? elele.title : " "} description={elele.description ? elele.description : ""} imageUrl={elele.urlToImage} newsUrl={elele.url} publishedAt={elele.publishedAt} author={elele.author} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button"  disabled={this.state.page <= 1} className="btn btn-primary btn-dark" style={this.props.mode === 'light' ? {color:'white',backgroundColor:'#0d6efd'} : {color:'white',backgroundColor:'black'}} onClick={this.HandleUpPrevious}> &larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalNews / this.props.pageSize)} className="btn btn-primary btn-blue" onClick={this.HandleUpNext} style={this.props.mode === 'light' ? {color:'white',backgroundColor:'#0d6efd'} : {color:'white',backgroundColor:'black'}} >Next &rarr; </button>
        </div>

      </div>
    )
  }
}

export default MainNews
