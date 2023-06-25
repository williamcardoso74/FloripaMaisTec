import { createContext, useState } from 'react';

export const UserContext = createContext ({
    formData: {},
    setFormData: () => {},
});

export const UserProvider = ( { children }) => {

    const [ formData, setFormData ] = useState({
        nickname: '',
        idade: '',
        email: '',
        password: '',
    });

    return (
        <UserContext.Provider value={{ formData, setFormData }}>{ children }</UserContext.Provider>
    )
};