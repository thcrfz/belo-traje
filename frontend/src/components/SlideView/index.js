import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
import '../../global.css'



export default class SlideView extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
        };

        return (
            <Slider {...settings}>
                <div className="card">

                    <img className="img-slide" alt="" src={require(`../../assets/item1.png`)} />

                    <h1>R$: 140,00 </h1>
                    <h2>12x sem juros</h2>

                    <div className="shopping-list">
                        <a className="shop-button" href="/shopping"> COMPRAR</a>
                        <a className="shop-button" href="/more"> DETALHES</a>
                    </div>

                </div>
                <div className="card">
                    <a href=""><img className="img-slide" alt="" src={require(`../../assets/item2.png`)} /></a>

                    <h1>R$: 100,00 </h1>
                    <h2>12x sem juros</h2>

                    <div className="shopping-list">
                        <a className="shop-button" href="/shopping"> COMPRAR</a>
                        <a className="shop-button" href="/more"> DETALHES</a>
                    </div>

                </div>
                <div className="card">
                    <a href=""><img className="img-slide" alt="" src={require(`../../assets/item3.png`)} /></a>
                    <h1>R$: 240,00 </h1>
                    <h2>12x sem juros</h2>

                    <div className="shopping-list">
                        <a className="shop-button" href="/shopping"> COMPRAR</a>
                        <a className="shop-button" href="/more"> DETALHES</a>
                    </div>
                </div>
                <div className="card">
                    <a href=""><img className="img-slide" alt="" src={require(`../../assets/item4.png`)} /></a>
                    <h1>R$: 89,99 </h1>
                    <h2>12x sem juros</h2>

                    <div className="shopping-list">
                        <a className="shop-button" href="/shopping"> COMPRAR</a>
                        <a className="shop-button" href="/more"> DETALHES</a>
                    </div>
                </div>
                <div className="card">
                    <a href=""><img className="img-slide" alt="" src={require(`../../assets/item5.png`)} /></a>
                    <h1>R$: 599,99 </h1>
                    <h2>12x sem juros</h2>

                    <div className="shopping-list">
                        <a className="shop-button" href="/shopping"> COMPRAR</a>
                        <a className="shop-button" href="/more"> DETALHES</a>
                    </div>
                </div>
                <div className="card">
                    <a href=""><img className="img-slide" alt="" src={require(`../../assets/item6.png`)} /></a>
                    <h1>R$: 49,99 </h1>
                    <h2>12x sem juros</h2>

                    <div className="shopping-list">
                        <a className="shop-button" href="/shopping"> COMPRAR</a>
                        <a className="shop-button" href="/more"> DETALHES</a>
                    </div>
                </div>
                <div className="card">
                    <a href=""><img className="img-slide" alt="" src={require(`../../assets/item7.png`)} /></a>
                    <h1>R$: 79,99 </h1>
                    <h2>12x sem juros</h2>

                    <div className="shopping-list">
                        <a className="shop-button" href="/shopping"> COMPRAR</a>
                        <a className="shop-button" href="/more"> DETALHES</a>
                    </div>
                </div>
                <div className="card">
                    <a href=""><img className="img-slide" alt="" src={require(`../../assets/item8.png`)} /></a>
                    <h1>R$: 140,00 </h1>
                    <h2>12x sem juros</h2>

                    <div className="shopping-list">
                        <a className="shop-button" href="/shopping"> COMPRAR</a>
                        <a className="shop-button" href="/more"> DETALHES</a>
                    </div>
                </div>
              
            </Slider>
        );
    }
}