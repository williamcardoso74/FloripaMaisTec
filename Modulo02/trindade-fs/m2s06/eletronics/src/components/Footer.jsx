import React from 'react';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="container-fluid Footer-wrapper">
            <div className="Empresa-wrapper">
                <h3>MINHA EMPRESA</h3>
                <span>Minha empresa<span>&copy;</span> Direitos reservados</span>
            </div>
            <div className="Contato-wrapper"></div>
            <div className="Informacoes-wrapper"></div>

        </div>
    );
}

export default Footer;
