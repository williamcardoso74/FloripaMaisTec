import React from 'react';
import PropTypes from 'prop-types';

function Input({text,num}) {
    return ( 
        <React.Fragment>
            <input className="Input" type="search" placeholder={text}/>
        </React.Fragment>       
     );
};

Input.propTypes = {
    text: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired
};

export default Input;