import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import api from '../../services/api'



export default function Card() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');

    const history = useHistory();

    const usuarioId = localStorage.getItem('usuarioId');

    async function newCartao(e){
         e.preventDefault();

        

        const data = {
            nome,
            numero,
            validade,
            cvv
        }

        try{
            await api.post('cartao', data, {
                headers:{
                    Authorization: usuarioId,
                }
            });

            history.push('/profile');

        }catch(err){
            alert('Error a cadastrar caso, tente novamente');
        }

    }



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>BELO TRAJE</h1>
                    <p>Registre o seu cartão</p>
                </section>

                <form onSubmit={newCartao}>
                    <input 
                        type="text" 
                        placeholder="Nome do cartão" 
                        value={nome}
                        onChange={e=> setNome(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="xxxx xxxx xxxx xxxx"
                        value={numero}
                        onChange={e=> setNumero(e.target.value)}
                    />
                    <input 
                        type="text" 
                        maxlength="3" 
                        placeholder="CVV" 
                        value={cvv}
                        onChange={e=> setCvv(e.target.value)}
                    
                    />
                    <input 
                        type="text" 
                        placeholder="validade" 
                        value={validade}
                        onChange={e=> setValidade(e.target.value)}
                    
                    />

                    <button className="button" type="submit">FINALIZAR CADASTRO</button>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                    </Link>

                    
                </form>
            </div>
        </div>
    )
}