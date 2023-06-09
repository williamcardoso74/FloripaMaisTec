import React from 'react';
import "../styles/Button.css";

function Button() {

    let name1 = "Pesquisa Google";
    let name2 = "Estou com Sorte";
    return ( 
        <div>
            <button className="Btn">{name1}</button>
            <button className="Btn">{name2}</button>

        </div>

     );
}

export default Button;
