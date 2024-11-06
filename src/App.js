import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewsDetail from './pages/NewsDetail';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
    <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </Router>
    </AuthProvider>
);

export default App;
