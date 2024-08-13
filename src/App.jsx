//import './App.css'
import { useState } from "react"
import BarraNav from "./components/barra/barra"
import CarruselOne from "./components/carrusel1/carru"
import FotosCont from "./components/contenedores/fotos"
function App() {
  return (
   <>
   <BarraNav/>
   <CarruselOne/>
   <FotosCont/>
   </>
  )
}

export default App
