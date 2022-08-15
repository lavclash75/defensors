import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <React.Fragment>
    <header class="header">
      <a href="/" class="logo">Defensors de girona</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
      <ul class="menu">
        <li class="active"> <Link to="/">Inici </Link></li>
        <li> <Link to="/Qui">Qui som / Què fem  </Link></li>
        <li> <Link to="/Napoleonic">Napoleonic</Link></li>
        <li> <Link to="/Sucessio">Sucessió</Link></li>
        <li> <Link to="/Galeria">Galeria</Link></li>   
        <li> <Link to="/Contacte">Contacte</Link></li>
            
      </ul>


  </header>
  
    
  
    <h1 class="pre">Presentació</h1>
  
    <div class="text">
      <p class="font" >La nostra Associació neix com a forma de vehicular l’ interès dels nostres socis i membres col·laboradors per la història</p>
      <p class="font">
        Es tracta d’ una Associació sense ànim de lucre, inclusiva i no militarista . Els que la integrem, creiem que a través de la recreació i la divulgació, podem explicar d’ una manera lúdica, però rigorosa la nostra història.
        </p>
      <p class="font">
        Principalment per la història més propera, la de la nostra ciutat, Girona. Sens dubte un dels fets històrics que més ha marcat de la nostra ciutat, han sigut els setges Napoleònics de 1808 i 1809. La ciutat que vivia reclosa dins les seves muralles, i que va viure un dels setges més llargs i durs dels que l’evolució de Girona li ha tocat viure.
        </p>
        <p class="font">Un setge, el de 1809, que va deixar la seva població minvada a la meitat, i que per tant, va marcar durant moltes dècades el seu creixement econòmic, la seva demografia i la seva expansió arquitectònica. Enclaustrada dins les muralles, fins que varen ésser enderrocades.
        </p>
        <p class="font">El nostre afany de conèixer, ens va portar a recrear aquells fets, i alhora investigar sobre la gent que va viure aquells moments. Hem realitzat investigacions sistemàtiques en els arxius de la nostra ciutat. També hem consultat diferents fons d’ arreu, i hem contactat amb especialistes de diferents branques de la història per tal de desenvolupar un projecte el més acostat a la realitat. Això que molts anomenem arqueologia experimental.
        </p>
        <p class="font">Arqueologia experimental en el nostre cas se centra sobre tot en la uniformitat i la vestimenta de la gent de l’època. Fabricar-ho amb els mateixos materials, i recrear de manera el màxim de fidel i rigorós que es pugui, la forma, i les maneres de fer d’aquell moment .</p>
    </div>
  
    <div class="home">
    <img class="presentacio" src="/assets/images/presentacio.jpg" alt=''/>
    
    </div>
  
   </React.Fragment>
  )
}
