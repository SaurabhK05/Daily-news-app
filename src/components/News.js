import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = React.useState([]);
  const [totalResults, setTotalResults] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35bebd1518d343f8b32dfcd873ae72c1&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();

      setArticles(parseData.articles);
      setTotalResults(parseData.totalResults);
      setLoading(false);
    }

    fetchData();
  }, []);

  const setPrevious = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35bebd1518d343f8b32dfcd873ae72c1&page=${
      pageCount - 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(parseData.articles);
    setPageCount(pageCount - 1);
    setLoading(false);
  };

  const setNext = async () => {
    if (totalResults / props.pageSize >= pageCount) {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=35bebd1518d343f8b32dfcd873ae72c1&page=${
        pageCount + 1
      }&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();

      setArticles(parseData.articles);
      setPageCount(pageCount + 1);
      setLoading(false);
    }
  };

  return (
    <div className="container my-3">
      <h1>Daily headlines - news</h1>
      {loading && <Spinner />}
      <div className="row ">
        {!loading &&
          articles.map((elements) => {
            return (
              <div className="col md-4" key={elements.url}>
                <NewsItem
                  title={
                    elements.title ? elements.title.slice(0, 64) + "..." : "..."
                  }
                  desc={
                    elements.description
                      ? elements.description.slice(0, 80) + "..."
                      : "..."
                  }
                  imageUrl={elements.urlToImage}
                  newsUrl={elements.url}
                />
              </div>
            );
          })}
      </div>

      <div className="container d-flex justify-content-between">
        <button
          disabled={pageCount <= 1}
          type="button"
          className="btn btn-dark"
          onClick={setPrevious}
        >
          Previous
        </button>
        <button
          disabled={totalResults / props.pageSize <= pageCount}
          type="button"
          className="btn btn-dark"
          onClick={setNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
