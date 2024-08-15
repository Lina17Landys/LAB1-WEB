//import './App.css'
import { useState } from "react"
import BarraNav from "./components/barra/barra"
import CarruselOne from "./components/carrusel1/carru"
import FotosCont from "./components/contenedores/fotos"
import Productos from "./components/caru-produ/carupro"
import VideoComponent from "./components/videoComp/vid"
import Info from "./components/section info/info"

function App() {
  return (
   <>
   <BarraNav/>
   <CarruselOne/>
   <center><FotosCont/></center>
   <Productos/>
   <VideoComponent/>
   <Info/>
   </>
  )
}

export default App
