import React from "react";
import Form from "./components/Form";
import Button from "./components/Button";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Pokebola from "./components/Pokebola";
import Pokedex from "./components/Pokedex";

function App() {
  let condicional = true;

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-6 col-sm text-center bg-secondary m-2">
            <h1>Olá Mundo!</h1>

            <Form tipo_input="email" legenda_input="Digite seu e-mail" />
            <Form tipo_input="password" legenda_input="Digite sua senha" />

            {/* <Form tipo_input="email" botao="Botão 1" num_botao="1" legenda_input="Digite seu e-mail"/>
      <Form tipo_input="password" botao="Botão 2" num_botao="2" legenda_input="Digite sua senha"/> */}
            <Button texto="Enviar" numero="1" />
          </div>

          <div className="col-6 col-sm text-center bg-secondary m-2 pt-4">
            <Counter isLoading={false}/>
          </div>

          <div className="row">
            {condicional ? <Pokebola/> : <p>Carregando</p>}
          </div>
        </div>
        <div className="row">
          <Pokedex />
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="App">
      <h1>Olá Mundo!</h1>
      <Button texto="Botão 1" numero="1"/>
      <Button texto="Botão 2" numero="2"/>
</div> */
}
