import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, requiredRole }) => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType'); // Obtém o tipo de usuário

    // Verifica se o token está presente e se o usuário tem o papel necessário
    if (!token) {
        return <Navigate to="/login" />;
    }
    
    // Verifica o papel do usuário
    if (requiredRole && userType !== requiredRole) {
        return <Navigate to="/" />; // Ou para qualquer rota pública de acesso negado
    }

    return <Component />;
};

export default PrivateRoute;
