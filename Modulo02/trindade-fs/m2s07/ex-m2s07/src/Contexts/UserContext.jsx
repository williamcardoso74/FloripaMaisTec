import PropTypes from 'react'
import { createContext, useState } from 'react';

export const UserContext = createContext ({
    formData: {},
    setFormData: () => {},
    userList: [],
    setUserList: () => {},
});

export const UserProvider = ({ children }) => {

    const [ formData, setFormData ] = useState({
        nickname: '',
        idade: '',
        email: '',
        password: '',
    });

    const [ userList, setUserList ] = useState([])

    return (
        <UserContext.Provider value={{ formData, setFormData, userList, setUserList }}>{ children }</UserContext.Provider>
    )
};

UserProvider.propTypes = {
    children: PropTypes.node,
};