// src/components/CreateNews.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNews } from '../../services/api';
import './CreateNews.css';

const CreateNews = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(''); // Estado para a imagem
    const navigate = useNavigate();

    const handleCreateNews = async (e) => {
        e.preventDefault();
        try {
            await createNews({ title, subtitle, content, image });
            navigate('/news');
        } catch (error) {
            console.error("Error creating news:", error);
        }
    };

    const handleGoBack = () => {
        navigate('/news');
    };

    return (
        <div className="create-news-container">
            <h1>Novas Notícias</h1>
            <form onSubmit={handleCreateNews}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <button type="submit" className="create-button">Criar</button>
            </form>
            <button onClick={handleGoBack} className="back-button">Voltar para as notícias</button>
        </div>
    );
};

export default CreateNews;
