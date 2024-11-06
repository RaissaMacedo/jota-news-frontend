// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../../../services/api'; // Função para registrar usuário
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Usando um CSS comum para login e registro

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ name, email, password });
                console.log(response);
            // Verifica se a API retornou um perfil ou um token
            if (response) { // Ajuste conforme a estrutura de retorno da sua API
                alert('Registro bem-sucedido! Faça login para continuar.');
                navigate('/login'); // Redireciona para o login após registro
            } else {
                alert('Erro ao registrar. Tente novamente.');
            }
        } catch (error) {
            console.error('Registration failed', error);
            alert('Erro de registro. Verifique os dados e tente novamente.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Crie sua Conta</h2>
                <p className="auth-subtitle">Registre-se para começar</p>
                <form onSubmit={handleRegister} className="auth-form">
                    <label>
                        Nome
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
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
                    <button type="submit" className="auth-button">
                        Registrar
                    </button>
                </form>
                <p className="switch-text">
                    Já tem uma conta?{' '}
                    <span onClick={() => navigate('/login')} className="switch-link">
                        Faça login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
