import React, { useEffect, useState } from 'react';
import { getNews } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const news = await getNews();
                setNewsList(news);
            } catch (error) {
                console.error('Erro ao buscar notícias:', error);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="home">
            <h1>Lista de Notícias</h1>
            <div className="news-list">
                {newsList.map(news => (
                    <div className="news-item" key={news.id}>
                        <h2>{news.title}</h2>
                        <p>{news.subtitle}</p>
                        <Link to={`/news/${news.id}`} className="read-more">Ler Mais</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
