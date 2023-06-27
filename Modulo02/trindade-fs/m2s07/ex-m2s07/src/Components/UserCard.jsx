import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

const UserCard = () => {
    const { formData } = useContext(UserContext)

    return (
        <>
        <div className="card">
            <h2>Nickname: {formData.nickname}</h2>
            <p>idade: {formData.idade}</p>
            <p>email: {formData.email}</p>
            <p>senha: {formData.password}</p>       
        </div>
        </>
        
    );
}

    


export default UserCard;