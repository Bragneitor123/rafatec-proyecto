import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';  // ✅ Ruta correcta
import '../../styles/css/login.css'; // Mantiene los estilos

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/usuarios/login', { email, password });
            localStorage.setItem('token', res.data.token); // Guarda el token en localStorage
            navigate('/dashboard'); // Redirige al Dashboard si el login es exitoso
            
        } catch (error) {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Introduce tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Introduce tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-login" Link='../dashboard/dashboard.js'>Iniciar Sesión</button>
            </form>
            <div className="footer">
                <p>¿No tienes cuenta? <a href="/registro">Regístrate</a></p>
            </div>
        </div>
    );
};

export default Login;