import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import DOMPurify from 'dompurify';  // Biblioteca para sanitizar entradas
import '../../styles/css/styles.css';

const Registro = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        // Sanitiza las entradas para evitar XSS
        const sanitizedFullname = DOMPurify.sanitize(fullname);
        const sanitizedEmail = DOMPurify.sanitize(email);
        const sanitizedPassword = DOMPurify.sanitize(password);

        try {
            await api.post('/usuarios', { 
                fullname: sanitizedFullname, 
                email: sanitizedEmail, 
                password: sanitizedPassword 
            });

            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            navigate('/login'); // Redirige al login después del registro
        } catch (error) {
            alert('Error al registrar usuario. Intenta nuevamente.');
        }
    };

    return (
        <div className="register-container">
            <h1>Crear Cuenta</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="fullname">Nombre Completo</label>
                <input
                    type="text"
                    id="fullname"
                    placeholder="Ingresa tu nombre completo"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />

                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Crea una contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit" className="btn-register">Registrarse</button>
            </form>

            <div className="login-link btn-color">
                ¿Ya tienes una cuenta? <a href="/">Inicia sesión aquí</a>
            </div>
        </div>
    );
};

export default Registro;