import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api'


export default function Register() {
    

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function HandlerRegister(e){
        e.preventDefault();

        
        const data = ({
            nome, 
            email,
        })

        try{

            const response = await api.post('usuario', data)
            alert(`GRAVE SEU ID DE ACESSO, PARA REALIZAR O LOGIN: ${response.data.id}`)
            history.push('/')
        
        }catch(err){
            alert('Erro no cadastro, tente novamente')
        }
        
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>BELO TRAJE</h1>
                    <p>Registre-se abaixo</p>
                </section>

                <form onSubmit={HandlerRegister}>
                    <input 
                        placeholder="Seu nome" 
                        value={nome}
                        onChange={e=> setNome(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />

                    <button className="button" type="submit">Continuar cadastro</button>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                    </Link>
                </form>
            </div>
        </div>
    )
}