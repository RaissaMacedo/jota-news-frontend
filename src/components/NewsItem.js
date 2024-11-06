import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/NewsItem,css';

const NewsItem = ({ news }) => (
    <div className="news-item">
        <h2>{news.title}</h2>
        <h4>{news.subtitle}</h4>
        <h4>{news.content}</h4>
        <h4>{news.image}</h4>
        <Link to={`/news/`}>Leia mais</Link>
    </div>
);

export default NewsItem;
