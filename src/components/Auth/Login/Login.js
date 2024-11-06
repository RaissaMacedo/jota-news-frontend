// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../../../services/api'; // Importe a função de login
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginUser({ email, password });
            
            // Supondo que a API retorne o perfil do usuário
            const userRole = userData.role; // Substitua 'role' pela chave correta conforme sua API

            // Redireciona com base no perfil do usuário
            if (userRole === 'admin') {
                navigate('/admin/dashboard'); // Exemplo de rota para admin
            } else if (userRole === 'editor') {
                navigate('/editor/home'); // Exemplo de rota para editor
            } else {
                navigate('/home'); // Para leitores ou outros usuários
            }
        } catch (error) {
            console.error('Login failed', error);
            alert('Erro de login. Verifique suas credenciais.');
        }
    };

    const handleNavigateToRegister = () => {
        navigate('/register'); // Redireciona para a tela de registro
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Bem-vindo!</h2>
                <p className="login-subtitle">Faça login para continuar</p>
                <form onSubmit={handleLogin} className="login-form">
                    <label>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Senha
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>
                <p className="register-text">
                    Não tem uma conta?{' '}
                    <span onClick={handleNavigateToRegister} className="register-link">
                        Registre-se
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
