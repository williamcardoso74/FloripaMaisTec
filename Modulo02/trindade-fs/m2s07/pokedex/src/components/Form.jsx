import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <div>
      <div>
        <Input className="mb-1" txt_placeHolder="Place Holder 2" />
        <Button className="mb-2" texto="Botão 1 " numero="1" />
      </div>

      <div>
        <Input txt_placeHolder="Place Holder 2" />
        <Button texto="Botão 2 " numero="2" />
      </div>
    </div>
  );
}

export default Form;
