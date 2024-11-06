import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNewsById } from '../services/api';
import '../styles/NewDeital.css';

const NewsDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Hook para navegação
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            try {
                const newsData = await getNewsById(id);
                setNews(newsData);
            } catch (error) {
                console.error('Erro ao buscar detalhes da notícia:', error);
            }
        };
        fetchNewsDetails();
    }, [id]);

    if (!news) {
        return <div>Carregando...</div>; // Pode melhorar com um spinner ou mensagem
    }

    return (
        <div className="news-details">
            <h1>{news.title}</h1>
            <h2>{news.subtitle}</h2>
            {news.image && <img src={news.image} alt={news.title} />}
            <p>{news.content}</p>
            <button onClick={() => navigate(-1)} className="back-button">
                Voltar
            </button>
        </div>
    );
};

export default NewsDetails;
