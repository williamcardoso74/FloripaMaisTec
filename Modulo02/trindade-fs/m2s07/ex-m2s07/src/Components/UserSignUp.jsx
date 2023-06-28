import React, { useState, useContext, useRef } from "react";
import "../Styles/UserSignUp.css";
import { UserContext } from '../Contexts/UserContext';

const UserSignUp = () => {

  const { formData, setFormData, userList, setUserList } = useContext(UserContext)
  
  //const dataRef = useRef(formData);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };
  
const handleForm = (e) => {
    e.preventDefault();

    setUserList([...userList, formData])
    
    console.log(formData);
    console.log(userList);
  }

  return (
    <>
      <div className="form-signup">
        <form className="form-group" onSubmit={handleForm}>
          <label htmlFor="Nickname">Nickname</label>
          <input
            type="text"
            onChange={handleInput}
            name="nickname"
          />

          <label htmlFor="Idade">Idade</label>
          <input
            type="number"
            onChange={handleInput}
            name="idade"
          />

          <label htmlFor="E-mail">E-mail</label>
          <input
            type="email"
            onChange={handleInput}
            name="email"
          />

          <label htmlFor="Senha">Senha</label>
          <input
            type="password"
            onChange={handleInput}
            name="password"
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
      
    </>
  );
}

export default UserSignUp;
