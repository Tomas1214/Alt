import React from 'react';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="images/Aerocomercialfueguina.jpg" width="100" alt="Aerocomercialfuegina" />
                <h1>Aerocomercial Fuegina</h1>
            </div>
        </header>
    );
}

export default Header;