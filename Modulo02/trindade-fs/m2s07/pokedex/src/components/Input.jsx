import React from 'react';

function Input({txt_placeHolder}) {
    return ( 
        
        <div>
            <label className="mt-1" for="Input" className="form-label">Input</label>
            <input type="text" className="form-control" placeholder={txt_placeHolder}/>
        </div>
        
     );
}

export default Input;