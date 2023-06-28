import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

const UserCard = () => {
    const { userList } = useContext(UserContext)

    return (
        <>
        <div className="card">
            <h2>Nickname: {userList[0]?.nickname}</h2>
            <p>idade: {userList[0]?.idade}</p>
            <p>email: {userList[0]?.email}</p>
            <p>senha: {userList[0]?.password}</p>       
        </div>
        </>
        
    );
}

    


export default UserCard;