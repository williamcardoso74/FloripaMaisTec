import React from 'react';
import '../styles/Header.css';
import menu from '../images/menu.png';

function Header() {
    
    const nome = "Letícia";

    return ( 
        <div className="Header">
            <ul>
                <li><a href='https://gmail.com'>Gmail</a></li>
                <li><a href='https://googlemaps.com'>Maps</a></li>
                <li><img src={menu}/></li>
            </ul>
        </div>
    );
}

export default Header;