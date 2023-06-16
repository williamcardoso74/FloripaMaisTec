import { useState } from "react";

function Header() {
  const [name, setName] = useState("Clique aqui");

  function mudarNome() {
    let novoNome = prompt("Insira seu nome");
    if (novoNome) {
      setName(novoNome);
    } else {
      setName("[Clique aqui]");
    }
  }

  return (
    <div className="p-3 mb-2 bg-warning">
      <nav className="navbar navbar-light bg-light text-center rounded">
        <a className="navbar-brand" href="#" onClick={mudarNome}>
          <img
            src="pokebolas.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Bem-vindo(a), {name}
        </a>
      </nav>
    </div>
  );
}

export default Header;
