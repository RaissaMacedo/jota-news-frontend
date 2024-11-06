// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getNews, deleteNews } from '../../services/api'; // Certifique-se de que a função deleteNews exista
import './Dashboard.css';

const Dashboard = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await getNews();
            setNews(response);
        };
        fetchNews();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteNews(id);
            setNews(news.filter(item => item.id !== id));
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Painel Administrativo</h1>
            <Link to="/news/create" className="create-news-link">Criar Nova Notícia</Link>
            <div className="news-list">
                {news.map(item => (
                    <div key={item.id} className="news-item">
                        <h2>{item.title}</h2>
                        <h3>{item.subtitle}</h3>
                        <button onClick={() => handleDelete(item.id)}>Excluir</button>
                        <Link to={`/news/edit/${item.id}`}>Editar</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
