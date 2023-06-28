import React from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const UserCard = () => {
  const { userList } = useContext(UserContext);

  return (
    <>
      {userList.map((user, index) => (
        <div className="card" key={index}>
          <p>Nickname: {user.nickname}</p>
          <p>Idade: {user.idade}</p>
          <p>Email: {user.email}</p>
          <p>Senha: {user.password}</p>
        </div>
      ))}
    </>
  );
};

export default UserCard;
