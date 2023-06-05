import React from 'react';
import googleLogo from '../images/googlelogo.png';
import '../styles/Main.css';
import Button from './Button.js';
//import Lupa from '../images/lupa.png';
import Input from './Input';

function Main() {
    return ( 
        <React.Fragment>
            <div className='Main'>
                <img src={googleLogo} alt='logo'/>
                <br/>
                <Input text='Pesquise com Google ou digite um endereço' num={7000000}/>
                <br/>
                <Button prop1='Pesquisa Google' prop2={25} prop3/>
                <Button prop1='Estou com sorte' prop2={30} prop3={false}/>
            </div>
        </React.Fragment>
    );
}

export default Main;