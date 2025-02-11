import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom"; // Hook para el enrutamiento
import Dashboard from "./components/dashboard/dashboard";
import NuevoProyecto from "./components/nuevo_proyecto/nuevo_proyecto";
import Login from "./components/login/login";
import Registro from "./components/register/registro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/proyecto" element={<NuevoProyecto />} />
      <Route path="./components/dashboard " element={<Dashboard/>}></Route>
    </Routes>
  );
}

export default App;
