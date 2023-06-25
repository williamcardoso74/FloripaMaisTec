import { useState, useContext } from 'react';
import Header from './Components/Header';
import UserSignUp from './Components/UserSignUp';
import UserCard from './Components/UserCard';
import { UserProvider } from './Contexts/UserContext';

import './App.css'

function App(lista) {
  
  return (
    <UserProvider>
      <Header/><br></br>
      <UserSignUp/>
    </UserProvider>
  )
}

export default App
