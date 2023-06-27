import { useState, useContext } from 'react';
import Header from './Components/Header';
import UserSignUp from './Components/UserSignUp';
import UserCard from './Components/UserCard';

import { UserProvider, UserContext } from './Contexts/UserContext';

import './App.css'

function App() {

  const { formData, setFormData } = useContext(UserContext)
  
  return (
    <UserContext>
      {/* <Header/><br></br> */}
      <UserSignUp/>
    </UserContext>
  )
}

export default App
