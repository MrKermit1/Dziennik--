import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Glowna from './components/kontentGlowna'
import DodajSzkole from './components/Dyrekcja/dodajSzkole'

function App() {
  return (
    <>
        <Routes>
          <Route index element={<Glowna/>} />
          <Route element={<DodajSzkole/>} path='/dodajSzkole' />
        </Routes>
    </>
  )
}

export default App
