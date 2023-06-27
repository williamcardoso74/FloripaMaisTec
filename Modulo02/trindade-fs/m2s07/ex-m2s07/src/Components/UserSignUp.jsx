import React, { useState, useContext, useRef } from "react";
import "../Styles/UserSignUp.css";
import { UserContext } from '../Contexts/UserContext';

const UserSignUp = () => {

  const { formData, setFormData } = useContext(UserContext)
  
  //const dataRef = useRef(formData);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
const handleForm = (e) => {
    e.preventDefault();

    //setFormData((dataRef))
    
    console.log(formData);
  }

  return (
    <>
      <div className="form-signup">
        <form className="form-group" onSubmit={handleForm}>
          <label htmlFor="Nickname">Nickname</label>
          <input
            type="text"
            value={formData.nickname}
            onChange={handleInput}
          />

          <label htmlFor="Idade">Idade</label>
          <input
            type="number"
            value={formData.idade}
            onChange={handleInput}
          />

          <label htmlFor="E-mail">E-mail</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleInput}
          />

          <label htmlFor="Senha">Senha</label>
          <input
            type="password"
            value={formData.password}
            onChange={handleInput}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
      
    </>
  );
}

export default UserSignUp;
