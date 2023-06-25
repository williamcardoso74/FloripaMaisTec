import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

const UserCard = () => {
    const formData = useContext(UserContext)

    return (
        <>
        <div className="card">
            <h2>Nickname: {nickname}</h2>
            <p>idade: {idade}</p>
            <p>email: {email}</p>
            <p>senha: {password}</p>       
        </div>
        </>
        
    );
}

    


export default UserCard;