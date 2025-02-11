import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'; 


const NuevoProyecto = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await api.get('/usuarios'); // Carga la lista de usuarios
                setUsuarios(res.data);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };
        fetchUsuarios();
    }, []);

    return (
        <div id="wrapper">
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/nuevo-proyecto">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Nuevo Proyecto</span>
                    </Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
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
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Usuario</span>
                                    <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="Perfil" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* End of Topbar */}

                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>

                        {/* Tabla de Usuarios */}
                        <table className="table table-striped centrado">
                            <thead>
                                <tr>
                                    <th scope="col">ID#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <th scope="row">{usuario.id}</th>
                                        <td>{usuario.fullname}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            <button className="btn btn-success">Editar</button>
                                            <button className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* End Page Content */}
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

export default NuevoProyecto;
