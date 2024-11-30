import React from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Home from './pages/Home/Home.jsx'
import Recrutamento from './pages/Recrutamento/Recrutamento.jsx';
import CriarRecrutamento from './pages/CriarRecrutamento/CriarRecrutamento.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';
import Equipe from './pages/Equipe/Equipe.jsx';
import Lider from './pages/lider/Lider.jsx';
import RecrutamentoDetalhes from './pages/RecrutamentoDetalhes/RecrutamentoDetalhes.jsx';
import CadastrarCurriculo from './pages/CadastrarCurruculo/CadastrarCurriculo.jsx';

const App = () => {
  return (
    <>
      <Outlet/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recrutamento" element={<Recrutamento />} />
          <Route path="/recrutamento/criar" element={<CriarRecrutamento />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/lider" element={<Lider />} />
          <Route path="/curriculo/cadastrar" element={<CadastrarCurriculo />} />
          <Route path="/recrutamento/detalhes/:id" element={<RecrutamentoDetalhes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
