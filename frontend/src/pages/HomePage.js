import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/galeria/Avion Grande.jpeg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Aerocomercial Fueguina Ofrece sus servicios para que usted pueda volar con la mayor confianza
                        y seguridad del mercado. Brindamos nuestros servicios desde el 2010 y estamos orgullosos de poder
                        darle a usted la satisfaccion de volar a precios accesibles y con un confort inigualable.
                        Muchas Gracias.
                    </p>
                    <p>Estamos relacionados con mas de 100 Aerolineas en todo el mundo para que usted sea capaz de elegir
                        la mejor opcion para usted y su familia y para el poder de su bolsillo.
                    </p>
                    <div className="testimonios">
                        <h2>Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita"> Un servicio recomendando al 100%</span>
                            <span className="autor"> Sofia villanueva </span>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default HomePage;