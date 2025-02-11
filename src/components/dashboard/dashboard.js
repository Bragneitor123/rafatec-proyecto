import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';  
import '../../styles/css/sb-admin-2.min.css'; 
import '../../styles/css/centrado.css';

const Dashboard = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/proyectos', { nombre, descripcion, email, telefono });
            alert('Proyecto creado con éxito');
            navigate('/dashboard'); // Redirige al Dashboard después de crear el proyecto
        } catch (error) {
            alert('Error al crear el proyecto. Intenta nuevamente.');
        }
    };

    return (
        <div id="wrapper">
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <a className="nav-link" href="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <hr className="sidebar-divider" />
            </ul>
            {/* End of Sidebar */}

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>
                    </nav>
                    {/* End of Topbar */}

                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        <h1 className="h3 mb-4 text-gray-800">Crear Nuevo Proyecto</h1>

                        {/* Formulario */}
                        <form className="w-100" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Ingrese el nombre del proyecto" 
                                    value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripción</label>
                                <textarea className="form-control" id="descripcion" placeholder="Ingrese una descripción" 
                                    value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo" 
                                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su teléfono" 
                                    value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-primary">Crear Proyecto</button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; CARPIZO FIERRO BRIAN DE JESUS 2025</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Dashboard;