import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getDados } from '../../components/local';
import './RecrutamentoDetalhes.css';
import Headeri from '../../components/Headeri';

const RecrutamentoDetalhes = () => {
    const { id } = useParams();
    const [recrutamento, setRecrutamento] = useState(null);  
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = getDados();
        setUser(userData);  
    }, []);

    useEffect(() => {
        if (user && user.token) {
            getEquipes(user.token);
        }
    }, [user]);  
  
    function getEquipes(token) {
        const url = axios.create({
            baseURL: "https://picapauapi-production.up.railway.app/api",
            headers: {
                Authorization: `Bearer ${token}`, 
            }
        })
        url.get("recrutamentos/meus-recrutamentos",
        ).then((resp) => {
            setRecrutamento(resp.data.recrutamentos);
        }).catch((error) => {
            console.log(error);
        })
    }

    const recrutamentoSelecionado = recrutamento?.find((rec) => rec._id === id);

    //



    if (!recrutamentoSelecionado) {
        return <p>Carregando detalhes do recrutamento...</p>; 
    } 
    return (
        <>
            <Headeri />
            <div className="recruitment-page">
                <div className="container mt-4">
                    <h1 className="recruitment-title">{recrutamentoSelecionado.nome}</h1>

                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">Descrição:</h3>
                            <p className="px-3">{recrutamentoSelecionado.descricao}</p>
                        </div>
                    </div>

                    <div>
                        {/*recrutamentoSelecionado.curriculos.map((curriculo) => {
                            let curriculoSeparado;
                            const httpCurriculo = axios.create({
                                baseURL: 'https://picapauapi-production.up.railway.app/api',
                                headers: {
                                    Authorization: `Bearer ${curriculo}`,
                                }
                            })
                            httpCurriculo.get("meus-dados")
                            .then((resp) => {
                                console.log(resp.data);
                                curriculoSeparado = resp.data.curriculo;
                            })
                            return (
                                <div>
                                    <h3 className="section-title">Curriculo:</h3>
                                    <p>{curriculo}</p>
                                </div>
                            );
                        })*/}
                    </div>

                    <div className="text-center mt-4">
                        <button className="finalize-button">Formar Equipe</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecrutamentoDetalhes;