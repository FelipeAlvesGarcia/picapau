import React from 'react';
import './Home.css';
import Headeri from '../../components/Headeri';

const Home = () => {

  return (
    <div className="container-fluid m-0 p-0">
    
    <Headeri />

      <div className="row m-0 p-0 d-flex justify-content-center">
        <div className="option-card mx-3 mt-5 mb-3 col-11 col-md-5 col-lg-4 d-flex flex-column justify-content-center align-itens-center">
          <h3>Inserir Currículo ao Banco de Dados</h3>
          <p>Adicione currículos diretamente ao nosso banco de dados para futuras oportunidades.</p>
          <a href="/curriculo/cadastrar">
            Inserir Currículo
          </a>
        </div>
        <div className="option-card mx-3 mt-md-5 mb-md-3 m-0 col-11 col-md-5 col-lg-4 d-flex justify-content-center flex-column align-itens-center">
          <h3>Criar Recrutamento</h3>
          <p>Inicie um novo recrutamento e gerencie o processo seletivo da empresa.</p>
          <a href="/recrutamento/criar">
            Lista de Recrutamentos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
