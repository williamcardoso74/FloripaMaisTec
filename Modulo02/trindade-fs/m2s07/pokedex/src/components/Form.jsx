import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form({ botao, num_botao, legenda_input, tipo_input }) {
  return (
    <>
      <form action="">
        <div className="form-group mb-2">
          <Input
            type={tipo_input}
            className="mb-1"
            legenda={legenda_input}
          />
        </div>
        
        {/* <Button className="mb-2" texto={botao} numero={num_botao} /> */}
      </form>
    </>
  );
}

export default Form;
