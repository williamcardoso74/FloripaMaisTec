import React from 'react';

function Input({legenda, tipo}) {

    function imprimirInput(e) {
        console.log(e.target.value)
    }

    return ( 
        
        <div>
            <label className="m-1" htmlFor="Input"></label>
            <input type={tipo} placeholder={legenda} onChange={imprimirInput}/>
        </div>
        
     );
}

export default Input;