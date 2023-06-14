import React from 'react'
import './App.css'
import googleLogo from "./images/googlelogo.png";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import PropTypes from 'prop-types';


function App() {

  return (
    <>
        <div className="body">
        <Header/>;
        <img src={googleLogo} alt="" />
        <Input/>
        <Button/>

      </div>
      
    </>
  )
}

export default App
