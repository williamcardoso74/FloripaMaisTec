import React from 'react';

function Button({texto, numero}) {
    
    function evento() {
        console.log('Você apertou o botão ') + numero;
    }
    return ( 
        <button onClick={evento} type="button" className="btn btn-warning m-1">{texto}</button>

     );
}

export default Button;