import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 1,
      pageCount: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35bebd1518d343f8b32dfcd873ae72c1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  setPrevious = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35bebd1518d343f8b32dfcd873ae72c1&page=${
      this.state.pageCount - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      pageCount: this.state.pageCount - 1,
      loading: false,
    });
  };

  setNext = async () => {
    if (this.state.totalResults / this.props.pageSize >= this.state.pageCount) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35bebd1518d343f8b32dfcd873ae72c1&page=${
        this.state.pageCount + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        pageCount: this.state.pageCount + 1,
        loading: false,
      });
    }
  };

  render(props) {
    return (
      <div className="container my-3">
        <h1>Daily headlines - news</h1>
        {this.state.loading && <Spinner />}
        <div className="row ">
          {!this.state.loading && this.state.articles.map((elements) => {
            return (
              <div className="col md-4" key={elements.url}>
                <NewsItem
                  title={elements.title?elements.title.slice(0, 64)+"...":"..."}
                  desc={elements.description?elements.description.slice(0, 80)+"...":"..."}
                  imageUrl={elements.urlToImage}
                  newsUrl={elements.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.pageCount <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.setPrevious}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.totalResults / this.props.pageSize <=
              this.state.pageCount
            }
            type="button"
            className="btn btn-dark"
            onClick={this.setNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
