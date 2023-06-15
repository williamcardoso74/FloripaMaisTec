import React from 'react';
import Form from './components/Form';

function App() {
  
  return ( 
    <div className="App">
      <h1>Olá Mundo!</h1>
      <Form tipo_input="email" botao="Botão 1" num_botao="1" legenda_input="Digite seu e-mail"/>
      <Form tipo_input="password" botao="Botão 2" num_botao="2" legenda_input="Digite sua senha"/>
    </div>
   );
}

export default App;


{/* <div className="App">
      <h1>Olá Mundo!</h1>
      <Button texto="Botão 1" numero="1"/>
      <Button texto="Botão 2" numero="2"/>
</div> */}