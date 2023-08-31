import React from "react";
import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="images/servicios/ferroviario.jpg" alt="tren" />
            <div className="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor odio facere minus dignissimos nam iste natus obcaecati magnam. Cupiditate sed optio explicabo sunt similique recusandae eum veritatis, dolorum tenetur.</p>
            </div>

        </div>
        
        <div className="servicio">
            <img src="images/servicios/aereo.jpg" alt="avión" />
            <div className="info">
                <h4>Transporte Aereo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor odio facere minus dignissimos nam iste natus obcaecati magnam. Cupiditate sed optio explicabo sunt similique recusandae eum veritatis, dolorum tenetur.</p>
            </div>

        </div>
        
        <div className="servicio">
            <img src="images/servicios/maritimo.jpg" alt="barco" />
            <div className="info">
                <h4>Transporte Maritimo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor odio facere minus dignissimos nam iste natus obcaecati magnam. Cupiditate sed optio explicabo sunt similique recusandae eum veritatis, dolorum tenetur.</p>
            </div>

        </div>
        
        <div className="servicio">
            <img src="images/servicios/terrestre.jpg" alt="camión" />
            <div className="info">
                <h4>Transporte Terrestre</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor odio facere minus dignissimos nam iste natus obcaecati magnam. Cupiditate sed optio explicabo sunt similique recusandae eum veritatis, dolorum tenetur.</p>
            </div>

        </div>
    </main>
    );
}

export default ServiciosPage;