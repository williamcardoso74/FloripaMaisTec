import React from "react";
/* import Proptypes from 'prop-types'; */

function Button({ contador, texto = "Botão", numero = 0, tipo = "button" }) {
  function evento(e) {
    e.preventDefault();
    console.log("Você apertou o botão " + numero);
    if (contador) {
      contador(1);
    }
  }
  return (
    <button onClick={evento} type={tipo} className="btn btn-warning m-1">
      {texto}
    </button>
  );
}

/* Button.defaultProps = {
    texto: "Button",
    numero: 0,
    tipo: "button"
} */

export default Button;
