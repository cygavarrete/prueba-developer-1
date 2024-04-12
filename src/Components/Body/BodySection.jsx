import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import axios from 'axios';
import "./Body.scss";

export default function App() {
    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        axios.get('https://private-f5cb41-pruebafrontend2024.apiary-mock.com/principal')
            .then(response => {
                setDestinos(response.data[0].masVendidos.destinos);
            })
            .catch(error => {
                console.error('Error al obtener los datos de la API:', error);
            });
    }, []);

    return (
        <div className='App'>
            {destinos.map((destino, index) => (
                <div className='productList' key={index}>
                    <div className='productCard'>
                        <img src={destino.destinoImgUrl} alt='destino-img' className='productImage' />
                        <div className='productCard__content'>
                            <h3 className='productName'>{destino.disponible}</h3>
                            <div className='displayStack__1'>
                                <div className='productPrice'>
                                    {destino.lm ? <img src={destino.logoLMUrl} alt='logo-lm' /> : null}
                                    {destino.av ? <img src={destino.logoAVUrl} alt='logo-av' /> : null}
                                </div>
                            </div>
                            <button className='productButton' onClick={() => window.location.href = destino.btnUrl}> {destino.btnTexto}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}