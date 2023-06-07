import React from 'react';
import '../styles/Hello.css';
import PropTypes from 'prop-types';


function Hello(texto) {
    return ( 
        <h1>{texto}</h1>
     );
}

Hello.propTypes = {
    texto: PropTypes.string,
}

export default Hello;