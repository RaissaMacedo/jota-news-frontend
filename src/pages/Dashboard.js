import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/Dashboard.css'; // Adicione seu CSS aqui

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);

    // Verifique se o carregamento ainda está em progresso
    if (loading) {
        return <div>Carregando...</div>;
    }

    // Verifique se o usuário não está autenticado
    if (!user) {
        return <div>Acesso negado. Você precisa estar logado.</div>;
    }

    return (
        <div className="dashboard">
            <h1>Bem-vindo ao Dashboard</h1>
            <p>Tipo de usuário: {user.userType}</p>
            {/* Adicione mais conteúdo e lógica aqui, dependendo do tipo de usuário */}
            {user.userType === 'admin' && (
                <div>
                    <h2>Administração</h2>
                    <p>Aqui você pode gerenciar notícias.</p>
                </div>
            )}
            {user.userType === 'editor' && (
                <div>
                    <h2>Edição de Notícias</h2>
                    <p>Aqui você pode criar e editar notícias.</p>
                </div>
            )}
            {user.userType === 'reader' && (
                <div>
                    <h2>Leitor</h2>
                    <p>Aqui você pode visualizar as notícias.</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
