import React from 'react'
import Header from "./components/Header";
import Banner from "./components/Banner";
import CardProduct from "./components/CardProduct";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Banner title1="ESCOLHA O MELHOR PARA VOCÊ" title2="nossos produtos" dot="."/>
      <CardProduct/>
      <Footer/>
    </>
  )
}

export default App
