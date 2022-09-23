
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from './pages/principal';
import Perfil from './pages/perfil';
import Consulta from './pages/Consulta';

export default function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Principal />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="consulta" element={<Consulta />} />
      </Routes>
       
    </Router>
  )
}



