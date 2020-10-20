import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft, FiTrash2, FiLogIn  } from 'react-icons/fi';

import './styles.css';
import '../../global.css'
import api from '../../services/api'

export default function Profile() {

    
    const [cartoes, setCartoes] = useState([]);
    
    const usuarioId= localStorage.getItem('usuarioId');
    const usuarioNome = localStorage.getItem('usuarioNome');

    useEffect(() => {
        api.get('perfil',{
            headers: {
                Authorization: usuarioId,
            }
        }).then(response => {
            setCartoes(response.data)
        })
    }, [usuarioId]);


    async function handleDeleteCartao(id){
        try{
            await api.delete(`cartao/${id}`, {
                headers:{
                    Authorization: usuarioId,
                }
            });

            setCartoes(cartoes.filter(cartao => cartao.id !== id))
        }catch(err){
            alert('Erro ao deletar.')
        }
    }

    

    return (
        <body>
            <header>
                <div className="top-bar">
                    <h1>BELO TRAJE</h1>
                    <span>Bem vindo, {usuarioNome}</span>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                    </Link>
                    <Link className="back-link" to="/card">
                            <FiLogIn sizer={16} color="#FAF4F4"></FiLogIn>
                            CADASTRE O SEU CARTÃO
                    </Link>
                </div>
            </header>

            <div className="profile-container">
                <h2>Cartões cadastrados</h2>

                <ul>
                    {cartoes.map(cartao => (
                        <li key={cartao.id}>
                            <strong>Numero:</strong>
                                <p>{cartao.numero}</p>
                            <strong>Validade:</strong>
                                <p>{cartao.validade}</p>
                            <strong>CVV:</strong>
                                <p>{cartao.cvv}</p>

                            
                            <Link className="button" to="/card">Novo</Link>
                            <button onClick={() => handleDeleteCartao(cartao.id)} type="button">
                                <FiTrash2 size={20} color="#a8a8b3"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            
        </body>
    )
}