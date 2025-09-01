//Estrutura
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState,useEffect } from 'react'

// Estilos
import './App.css'

//Components
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

//Pages

function App() {

  return (
    <div>
      <Navbar/>
      <h1>Becanny e-commerce</h1>
      <Footer/>
    </div>
  )
}

export default App
