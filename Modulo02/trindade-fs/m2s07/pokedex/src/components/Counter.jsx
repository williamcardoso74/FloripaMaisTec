import { useState, useEffect, useRef } from "react";
import Button from "./Button";

function Counter({isLoading}) {

  const [conta, setConta] = useState(0);
  const prevConta = useRef()



  console.log(prevConta)

  const updateConta = (num) => {
    setConta(conta + num);
  };

  const resetConta = (num) => {
    setConta((num = 0));
  };

  if(isLoading) {
    return <p>... Carregando</p>
  }

  //Genérico
  useEffect(() => {
    console.log("Genérico")
    prevConta.current = conta
  })

  // fases 2
  useEffect(() => {
    console.log('Montagem')
  },[]);

  // fase 3
  useEffect(() => {
    //console.log(conta)
    console.log(prevConta)
  }, [conta]);

  // fase 4
  useEffect(() => {
    return () => console.log("Desmontagem")
  }, []);

  return (
    <div className="text-center">
      <h3>Você clicou {conta} vezes </h3>
      <Button texto="Contador" numero={2} contador={updateConta} />
      {/* <button className="btn btn-primary m-2" onClick={() => setConta(conta + 1)}>
        Contador
      </button> */}

      <Button texto="Limpar" numero={3} contador={resetConta} />
      {/* <button className="btn btn-primary m-2" onClick={() => setConta(0)}>
        Limpar
      </button> */}
    </div>
  );
}

export default Counter;
