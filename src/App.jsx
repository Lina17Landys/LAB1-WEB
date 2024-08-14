//import './App.css'
import { useState } from "react"
import BarraNav from "./components/barra/barra"
import CarruselOne from "./components/carrusel1/carru"
import FotosCont from "./components/contenedores/fotos"
import Productos from "./components/caru-produ/carupro"
function App() {
  return (
   <>
   <BarraNav/>
   <CarruselOne/>
   <center><FotosCont/></center>
   <Productos/>
   </>
  )
}

export default App
