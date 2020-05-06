import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const News = (props) => {                                   

    const [news, setNews] = useState([]);

    useEffect (() => {

        axios.get(`http://newsapi.org/v2/top-headlines?country=${props.match.params.id}&apiKey=773d8a9b4bca4c16873665e9cc698079`)
        .then((res) =>{
            setNews(res.data.articles)

        })
    }, [props.match.params.id])


    const newsList = news.length? news.map(article => {
        return(
            <div className="news container" key={article.publishedAt}>
                <h5>{article.title}</h5>
                <img src={article.urlToImage} alt=''></img><br></br>
                <a href={article.url}  target="_blank"  rel="noopener noreferrer">Description</a> <br></br>
                <span>updated at: {article.publishedAt.slice(0, 10)}</span>
            </div>  
        )
    })
         : <h5 style={{textAlign:'center'}}>no updated news for this country</h5>
    

    return (  
        <div className="news-container">  
            <Link to= {`/show/${props.match.params.id}`}><button>Back</button></Link>
            <h4 >Latest News</h4>
            {newsList}
        </div> 
    );
}
 

export default News;