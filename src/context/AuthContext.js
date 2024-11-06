import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/api'; // Importar a função de login

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userType = localStorage.getItem('userType');
        if (token && userType) {
            setUser({ token, userType });
        }
        setLoading(false);
    }, []);

    // Função de login que será usada no Login.js
    const login = async (credentials) => {
      console.log("entrou no login context");
      console.log("credentials recebidas no contexto:", credentials);
      
      // Garante que `credentials` contém `email` e `password`
      if (!credentials.email || !credentials.password) {
          console.error("Credenciais inválidas, falta `email` ou `password`.");
          return;
      }
      
      // Chama a API de login e aguarda o token e outras informações
      try {
          const data = await loginUser(credentials); // Aqui deve retornar token e tipo de usuário
          console.log("Dados recebidos do loginUser no contexto:", data);
  
          // Salva o token e o tipo de usuário no localStorage e no estado do contexto
          localStorage.setItem('token', data.token);
          localStorage.setItem('userType', data.userType);
          setUser({ token: data.token, userType: data.userType });
      } catch (error) {
          console.error("Falha ao realizar login no contexto", error);
          throw error; // Propaga o erro para tratamento adicional, se necessário
      }
  };
  

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
