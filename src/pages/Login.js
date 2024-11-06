import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { loginUser } from '../services/api';
import { AuthContext } from '../context/AuthContext'; // Importando AuthContext
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Inicializando useNavigate
    const { login } = useContext(AuthContext); // Usando o contexto de autenticação
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        try {
            const data = await loginUser({ email, password }); // Chama a API para login
            await login(data); // Armazena o usuário no contexto
            navigate('/'); // Redireciona para o Dashboard
        } catch (err) {
            console.log(err)
            setError('Falha ao realizar login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="login">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-field">
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="login-button">Entrar</button>
                </form>
                <div className="register-link">
                    <p>Ainda não tem uma conta? <a href="/register">Registrar</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
