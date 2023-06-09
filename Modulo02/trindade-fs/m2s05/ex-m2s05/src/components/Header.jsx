import React from 'react';
import '../styles/Header.css';
import menu from '../images/menu.png';

function Header() {

    return ( 
        <div className="Header">
            <ul>
                <li><a href='https://www.bing.com/?cc=br'>BING</a></li>
                <li><a href='https://www.bing.com/maps?FORM=Z9LH2'>BING Maps</a></li>
                <li><img src={menu}/></li>
            </ul>
        </div>
    );
}

export default Header;