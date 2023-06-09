import React from 'react';

function Header() {
    const usuario = "William"
    return ( 
        <div className="Header">
            <h1>O nome do usuário é {usuario}</h1>
        </div>
     );
}

export default Header;