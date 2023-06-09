import React from "react";
import PropTypes from 'prop-types';

const InformacoesPessoa = (props) => {
  return (
  <>
    <h1>
      Olá, Meu nome é {props.nome}, tenho {props.idade} anos e gosto de {props.hobbie}.
    </h1>
  </>
  )
}

InformacoesPessoa.propTypes = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    hobbie: PropTypes.string,
}

export default InformacoesPessoa;


