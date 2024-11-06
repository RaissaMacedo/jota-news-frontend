import React, { useState, useEffect } from 'react';
import { createNews, editNews } from '../services/api';

const NewsForm = ({ setNews, editing, setEditing }) => {
    const [formData, setFormData] = useState({ title: '', subtitle: '', image: '', content: '' });

    useEffect(() => {
        if (editing) {
            setFormData(editing);
        } else {
            setFormData({ title: '', subtitle: '', image: '', content: '' });
        }
    }, [editing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            await editNews(editing.id, formData);
        } else {
            const newNews = await createNews(formData);
            setNews((prev) => [...prev, newNews]);
        }
        setEditing(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Título" required />
            <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} placeholder="Subtítulo" required />
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="URL da Imagem" required />
            <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Conteúdo" required />
            <button type="submit">{editing ? 'Editar Notícia' : 'Cadastrar Notícia'}</button>
        </form>
    );
};

export default NewsForm;
