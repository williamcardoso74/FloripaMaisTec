import { useState } from "react";
import "../styles/Pokebola.css";

function Pokebola() {
  const [abrir, setAbrir] = useState();

  function abrirPokebola() {
    if (abrir) {
      setAbrir();
    } else {
      setAbrir("420px");
    }
  }

  return (
    <div className="pokebola">
      <div className="top-bar">
        <div className="visor" style={{ height: abrir }}>
          <button className="visor__action-button" onClick={abrirPokebola}>
            Abra aqui
          </button>
        </div>
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Pokebola;
