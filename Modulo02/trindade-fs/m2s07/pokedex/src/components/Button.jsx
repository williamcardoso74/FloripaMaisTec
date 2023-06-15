import React from 'react';
import Proptypes from 'prop-types';

function Button({texto, numero}) {
    
    function evento() {
        console.log('Você apertou o botão ') + {numero};
    }
    return ( 
        <button onClick={evento} type="button" className="btn btn-warning m-1">{texto}</button>

     );
}

Button.defaultProps = {
    texto: "Botão",
    numero: 0
}

export default Button;