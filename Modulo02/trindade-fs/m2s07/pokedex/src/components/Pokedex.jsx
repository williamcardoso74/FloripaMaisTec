import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";

function Pokedex() {
  const [pokemons, setPokemons] = useState([
    "bulbassauro",
    "squirtle",
    "charmander",
  ]);
  let pokemon = "";

  // salva pokemon digitado no input
  function salvarPokemon(e) {
    pokemon = e.target.value;
  }

  //adicionar pokemon à lista
  function adicionar() {
    if (pokemon) {
      setPokemons((pokemons) => [...pokemons, pokemon]);
    } else {
      alert("Digite o nome de um pokemon");
    }
    console.log(pokemons);
  }

  return (
    <div className="pokedex">
      <h4>Coleção de Pokemons</h4>
      <p>Seus Pokemons são:</p>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>

      <div className="row">
        <div className="form-group mb-2">
          <input
            placeholder="Digite o nome do Pokemon"
            type="text"
            className="form-control"
            onChange={salvarPokemon}
          />
          <button type="submit" className="btn btn-light" onClick={adicionar}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
