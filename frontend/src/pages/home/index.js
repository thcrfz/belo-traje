import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn, FiShoppingCart } from 'react-icons/fi'
import { IoIosInformationCircle } from "react-icons/io";
import { MdCopyright } from "react-icons/md";



import './styles.css';
import '../../global.css';
import SlideView from '../../components/SlideView';

import api from '../../services/api';





export default function Home() {

    const[id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
    
        try{
            const response = await api.post('sessao', { id });
            localStorage.setItem('usuarioId', id);
            localStorage.setItem('usuarioNome', response.data.nome);
            history.push('/profile');
        }catch(err){
            alert('Falha no login tente novamente')
        }
    }

        
        const importImg = require =>
            require.keys().reduce((acc, next) => {
                acc[next.replace("./", "")] = require(next);
                return acc;
            }, {});
        const images = importImg(
            require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
        );

    return (

        <body>
            <header>
                <div className="top-bar">

                    <h1>BELO TRAJE</h1>

                    <form onSubmit={handleLogin} className="form" >

                        <div className="input-group">
                            <input 
                                placeholder="Sua ID"
                                value={id}
                                onChange={e=>setID(e.target.value)} 
                            />
                        </div>


                        <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/register">
                            <FiLogIn sizer={16} color="#FAF4F4"></FiLogIn>
                            CADASTRE-SE
                        </Link>
                    </form>
                </div>
            </header>

            <div className="userName">
                <h1>Bem vindo, Usuário</h1>
            </div>

            <div class="container">
                <div className="tool-bar-container">
                    <div className="nave-bar">
                        <div className="sub-nave">
                            <button className="subnavebnt">Roupas <i className="fai fa-caret-down"></i></button>
                            <div className="sub-naver-content">
                                <a href="/polos">Polos</a>
                                <a href="#team">Agasalhos</a>
                                <a href="#careers">Camisetas</a>
                                <a href="#careers">Camisas</a>
                            </div>
                        </div>
                        <div className="sub-nave">
                            <button className="subnavebnt">Calçados <i className="fai fa-caret-down"></i></button>
                            <div className="sub-naver-content">
                                <a href="#bring">Tênis</a>
                                <a href="#deliver">Sapatos sociais</a>
                                <a href="#package">Sandalias</a>
                                <a href="#express">Botas</a>
                            </div>
                        </div>
                        <div className="sub-nave">
                            <button className="subnavebnt">Marcas <i className="fai fa-caret-down"></i></button>
                            <div className="sub-naver-content">
                                <a href="#link1">Nike</a>
                                <a href="#link2">Calvin Klein</a>
                                <a href="#link3">Colcci</a>
                                <a href="#link4">Vizzano</a>
                                <a href="#link4">Jorge Bischoff</a>
                                <a href="#link4">West Coast</a>
                            </div>
                        </div>
                        <div className="sub-nave">
                            <button className="subnavebnt">Lojas<i className="fai fa-caret-down"></i></button>
                            <div className="sub-naver-content">
                                <a href="#link1">Centro</a>
                                <a href="#link2">Zona Norte</a>
                                <a href="#link3">Zona Sul</a>
                                <a href="#link4">Zona Oeste</a>
                                <a href="#link4">Zona Leste</a>
                            </div>
                        </div>
                    </div>


                    <div className="search">
                        <form>
                            <a href="/shopping">
                                <FiShoppingCart sizer={16} color="#FAF4F4"></FiShoppingCart>
                            CARRINHO
                        </a>
                            <input type="search" placeholder="Pesquisar" />
                        </form>
                    </div>
                </div>

                <div className="products-container">
                    <SlideView />
                </div>

                <div className="marcas-container">

                    <h3>MARCAS</h3>

                    <div className="marcas-grid">
                        <div className="marca-card">
                            <img src={images['marca1.png']} alt="" />
                        </div>
                        <div className="marca-card">
                            <img src={images['marca2.png']} alt="" />
                        </div>
                        <div className="marca-card">
                            <img src={images['marca3.png']} alt="" />
                        </div>
                        <div className="marca-card">
                            <img src={images['marca4.png']} alt="" />
                        </div>
                        <div className="marca-card">
                            <img src={images['marca5.png']} alt="" />
                        </div>
                        <div className="marca-card">
                            <img src={images['marca6.png']} alt="" />
                        </div>
                    </div>

                </div>

                <div className="offerts-container">

                    <h3>OFERTAS</h3>

                    <div className="offerts-grid">
                        <div className="offerts-card">
                            <h4>-30%</h4>
                            <img src={images['item9.png']} alt="" />
                            <div className="prices">
                                <p>R$ 44,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h4>-15%</h4>
                            <img src={images['item11.png']} alt="" />
                            <div className="prices">
                                <p>R$ 54,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h4>-25%</h4>
                            <img src={images['item12.png']} alt="" />
                            <div className="prices">
                                <p>R$ 49,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h4>-17%</h4>
                            <img src={images['item13.png']} alt="" />
                            <div className="prices">
                                <p>R$ 64,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h4>-40%</h4>
                            <img src={images['item14.png']} alt="" />
                            <div className="prices">
                                <p>R$ 39,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h4>-70%</h4>
                            <img src={images['item10.png']} alt="" />
                            <div className="prices">
                                <p>R$ 29,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                    </div>

                    <h3>NOVIDADES</h3>

                    <div className="offerts-grid">
                        <div className="offerts-card">
                            <h5>Novo</h5>
                            <img className="novImg" src={images['item16.png']} alt="" />
                            <div className="prices">
                                <p>R$ 44,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h5>Novo</h5>
                            <img className="novImg" src={images['item17.png']} alt="" />
                            <div className="prices">
                                <p>R$ 54,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h5>Novo</h5>
                            <img className="novImg" src={images['item18.png']} alt="" />
                            <div className="prices">
                                <p>R$ 49,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h5>Novo</h5>
                            <img className="novImg" src={images['item19.png']} alt="" />
                            <div className="prices">
                                <p>R$ 64,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h5>Novo</h5>
                            <img className="novImg" src={images['item14.png']} alt="" />
                            <div className="prices">
                                <p>R$ 39,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                        <div className="offerts-card">
                            <h5>Novo</h5>
                            <img className="novImg" src={images['item10.png']} alt="" />
                            <div className="prices">
                                <p>R$ 29,99</p>
                                <a href="#"><FiShoppingCart sizer={16} color="#302C2C"></FiShoppingCart>Carrinho</a>
                                <a href="#"><IoIosInformationCircle sizer={16} color="#302C2C"></IoIosInformationCircle>Detalhes</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contacts-container">

                    <ul >
                        <li>
                            <h6>Institucional</h6>
                            <a href="#"><p>Sobre Belo Traje</p></a>
                            <a href="#"><p>Contatos</p></a>
                            <a href="#"><p>Regulamentos</p></a>
                            <a href="#"><p>Políticas e privacidade</p></a>
                        </li>
                        <li>
                            <h6>Ajuda</h6>
                            <a href="#"><p>Entregas</p></a>
                            <a href="#"><p>Pagamentos</p></a>
                            <a href="#"><p>Trocas e devoluções</p></a>
                            <a href="#"><p>Meus pedidos</p></a>
                            <a href="#"><p>Cancelamentos</p></a>
                            <a href="#"><p>Arrependimento</p></a>
                        </li>
                        <li>
                            <h6>Contatos</h6>
                            <a href="#"><p>Facebook</p></a>
                            <a href="#"><p>Whatsapp</p></a>
                            <a href="#"><p>Instagram</p></a>
                            <a href="#"><p>Linkedin</p></a>
                        </li>
                    </ul>

                </div>


            </div>



            <footer className="footer">
                <div className="bottom-bar">
                    <MdCopyright sizer={16} color="#FAF4F4"></MdCopyright> <h7>Copyright    2020</h7>
                </div>
            </footer>

        </body>

    );
};

