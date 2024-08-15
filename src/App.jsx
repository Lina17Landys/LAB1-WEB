//import './App.css'
import { useState } from "react"
import BarraNav from "./components/barra/barra"
import CarruselOne from "./components/carrusel1/carru"
import FotosCont from "./components/contenedores/fotos"
import Productos from "./components/caru-produ/carupro"
import VideoComponent from "./components/videoComp/vid"
import Info from "./components/section info/info"
import BannerImg from "./components/imagen-banner/banner"
import Testimonio from "./components/testimonios/testimonio"
import Footer from "./components/footer/footer"

function App() {
  return (
    
   <>
   <BarraNav/>
   <CarruselOne/>
   <center><FotosCont/></center>
   <Productos/>
   <VideoComponent/>
   <Info/>
   <BannerImg/>
   <Testimonio/>
   <Footer/>
   </>
  )
}

export default App
