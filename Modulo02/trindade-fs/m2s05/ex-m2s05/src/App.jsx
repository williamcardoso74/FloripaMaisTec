import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/Input";
import bingLogo from './images/bingLogo.png';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <img src={bingLogo} alt="logo" />
      <br />
      <Input text="Pesquise com Bing ou digite um endereço" num={7000000} />
      <br />
      <Button prop1="Pesquisa Bing" prop2={25} prop3 />
      <Button prop1="Hoje é o dia!" prop2={30} prop3={false} />
    </div>
  );
}

export default App;
