import React from "react";
import { useState } from "react";

function Header() {
  const [nome, setNome] = useState('');
  
  function renderNome(e) {
    e.preventDefault();
    setNome(nome)
  }

  return (
    <div className="p-3 mb-2 bg-warning">
      <nav className="navbar navbar-light bg-light text-center rounded">
        <form className="form" onSubmit={renderNome}>
          <label htmlFor="Qual é o seu nome?"></label>
          <input
            className="form-control"
            type="text"
            placeholder="coloque seu nome aqui"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <button className="btn btn-light" type="submit">
            {"Enviar"}
          </button>

          <div>
          {
          nome !== '' && <p>Seu nome é {nome}</p>
          }
          </div>
                    
        </form>
      </nav>
    </div>
  );
}

export default Header;
