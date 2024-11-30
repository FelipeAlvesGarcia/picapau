import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {path: "/", element: <Login /> },
      {path: "/cadastro", element: <Cadastro /> },
      {path: "/home", element: <Home />},
      {path: "/recrutamento", element: <Recrutamento />},
      {path: "/recrutamento/criar", element: <CriarRecrutamento />},
      {path: "/perfil", element: <Perfil />},
      {path: "/equipe", element: <Equipe />},
      {path: "/lider", element: <Lider />},
      {path: "/curriculo/cadastrar", element: <CadastrarCurriculo />},
      {path: "/recrutamento/detalhes/:id", element: <RecrutamentoDetalhes />}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
