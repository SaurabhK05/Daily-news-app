import React from "react";

const NewsItem = (props) => {
  let { title, desc, imageUrl, newsUrl } = props;
  return (
    <div className="col md-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a
            href={newsUrl}
            target={"_blank"}
            className="btn btn-primary"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
