import React from 'react';
import '../styles/Hello.css';
import PropTypes from 'prop-types';


function Hello(props) {
    return ( 
        <h1>{props.texto}</h1>
     );
}

Hello.propTypes = {
    texto: PropTypes.string,
}

export default Hello;