import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const News = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${props.match.params.id}&apiKey=773d8a9b4bca4c16873665e9cc698079`
      )
      .then((res) => {
        setNews(res.data.articles);
        console.log(props.match.params.id);
      });
  }, []);

  const newsList = news.length ? (
    news.map((article) => {
      return (
        <div className="news container" key={article.publishedAt}>
          <h4 style={{ color: "black" }}>{article.title}</h4>
          <img src={article.urlToImage} alt=""></img>
          <br></br>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Description
          </a>{" "}
          <br></br>
          <span>updated at: {article.publishedAt.slice(0, 10)}</span>
        </div>
      );
    })
  ) : (
    <h5 style={{ textAlign: "center" }}>No updated news for this country</h5>
  );

  return (
    <div className="news-container">
      <Link to={`/show/${props.match.params.id}`}></Link>
      <h4 style={{ fontSize: 25 }}>Latest News</h4>
      {newsList}
    </div>
  );
};

export default News;
