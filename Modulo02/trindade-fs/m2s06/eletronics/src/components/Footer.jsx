import React from 'react';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="container-fluid Footer-wrapper">
            <div className="col-4 Empresa-wrapper">
                <h3>MINHA EMPRESA</h3>
                <span>Minha empresa<span>&copy;</span> Direitos reservados</span>
            </div>
            <div className="col-4 Contato-wrapper">
                <div className="redes-wrapper">
                    <h3>CONTATO</h3>
                    <br></br>
                    <span>+55 31 9999-9999</span><br />
                    <span>contato@suaempresa.com</span><br />
                    
                    <span>Rua Minha Rua, 00 - Seu Bairro</span><br />
                    <span>Florianópolis - SC</span><br />
                    
                    <span>Redes Sociais</span>
                </div>

            </div>


            <div className="col-4 Informacoes-wrapper">
                <h3>INFORMAÇÕES</h3>
                <span><a href="#">Bicicletas</a></span><br></br>
                <span><a href="#">Seguros</a></span><br></br>
                <span><a href="#">Contato</a></span><br></br>
                <span><a href="#">Termos e Condições</a></span>
            </div>

        </div>
    );
}

export default Footer;
