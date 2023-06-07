import React from "react";
import './InformacoesPessoa.css';
import PropTypes from "prop-types";

const InformacoesPessoa = (props) => {
  return (
    <div className="container alert alert-success" role="alert">
      <h1>
        Olá, Meu nome é <strong className="fw-bold text-center">{props.nome}</strong>, tenho {props.idade} anos e gosto de{" "}
        {props.hobbie}.
      </h1>
    </div>
  );
}

InformacoesPessoa.propTypes = {
  nome: PropTypes.string.isRequired,
  idade: PropTypes.number.isRequired,
  hobbie: PropTypes.string,
};

export default InformacoesPessoa;
