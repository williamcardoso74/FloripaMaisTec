import { useState, useContext } from 'react';
import Header from './Components/Header';
import UserSignUp from './Components/UserSignUp';
import UserCard from './Components/UserCard';

import { UserProvider, UserContext } from './Contexts/UserContext';

import './App.css'

const App = () => {

  return (
    <UserProvider>
      {/* <Header/><br></br> */}
      <UserSignUp/>
      <UserCard/>
    </UserProvider>
  )
}

export default App
