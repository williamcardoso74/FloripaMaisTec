import "./App.css";
import InformacoesPessoa from "./components/InformacoesPessoa/InformacoesPessoa";


function App() {
  const pessoa = {
    nome: "William",
    idade: 49,
    hobbie: "Futevolei",
  };

  return (
    <div className="container-fluid">
      <InformacoesPessoa
        nome={pessoa.nome}
        idade={pessoa.idade}
        hobbie={pessoa.hobbie}
      />
    </div>
  );
};

export default App;
