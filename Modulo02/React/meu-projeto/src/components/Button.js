import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
        
    return (  
        <React.Fragment>
            <button type="submit" >{props.prop1}</button>
            
        </React.Fragment>
    );
}

Button.propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.bool,
};

export default Button;