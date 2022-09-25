
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from './pages/principal';
import Perfil from './pages/perfil';
import Favoritos from './pages/Favoritos';

export default function App() {
  return (
    <div id='router'>
    <Router>
      <Routes>
      
        <Route path="/" element={<Principal />} />
        <Route path="perfil" element={<Perfil />}/>
        <Route path="favoritos" element={<Favoritos />} />
      </Routes>
       
    </Router>
    </div>
  )
}



