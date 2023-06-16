import React from 'react';

function Input({txt_placeHolder}) {

    function imprimirInput(e) {
        console.log(e.target.value)
    }

    return ( 
        
        <div>
            <label className="m-1" htmlFor="Input"></label>
            <input type="text" placeholder={txt_placeHolder} onChange={imprimirInput}/>
        </div>
        
     );
}

export default Input;