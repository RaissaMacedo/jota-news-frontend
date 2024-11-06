// src/components/EditNews.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsById, editNews } from '../../services/api';
import './EditNews.css';

const EditNews = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            const news = await getNewsById(id);
            setTitle(news.title);
            setContent(news.content);
        };

        fetchNews();
    }, [id]);

    const handleEditNews = async (e) => {
        e.preventDefault();
        try {
            await editNews(id, { title, content });
            window.location.href = '/news';
        } catch (error) {
            console.error("Error editing news:", error);
        }
    };

    return (
        <div className="edit-news-container">
            <h1>Edit News</h1>
            <form onSubmit={handleEditNews}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditNews;
