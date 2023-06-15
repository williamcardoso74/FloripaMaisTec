import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form({botao, num_botao, legenda_input, tipo_input }) {
  return (
    
      <div>
        <Input type={tipo_input} className="mb-1" txt_placeHolder={legenda_input} />
        <Button className="mb-2" texto={botao} numero={num_botao} />
      </div>
        
  );
};

export default Form;
