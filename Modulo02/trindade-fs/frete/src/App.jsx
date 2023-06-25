import { useState } from "react";
import "./App.css";

function App() {
  const [peso, setPeso] = useState();
  const [distancia, setDistancia] = useState();

  const [resultado, setResultado] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const valor = peso * distancia;

    setResultado(valor);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Calculo de Frete</h1>
      <input
        type="number"
        placeholder="Digite o peso do produto"
        value={peso}
        onChange={(event) => Number(setPeso(event.target.value))}
      />
      <input
        type="number"
        placeholder="Digite a distancia do produto"
        value={distancia}
        onChange={(event) => Number(setDistancia(event.target.value))}
      />

      <button type="submit">Calcular valor</button>

      {resultado === 1 ? "Frete Gratis" : <p>O valor do frete é {resultado}</p>}
    </form>
  );
}

export default App;
