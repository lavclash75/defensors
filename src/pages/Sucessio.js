import React from 'react'
import { Link } from 'react-router-dom'

export default function Sucessio() {
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
     <h1 class="qui">Successsió</h1>
    <h2 class="molins">REGIMENT DE FUSELLERS DE MUNTANYA JAUME MOLINS</h2>
    <div class="textmolins">
    <p class="font">Els nostres socis són recreadors que en la seva majoria estant dins el món de la recreació des de l’any 2009. La nostra Associació està formada per gent d’arreu de Catalunya i fins i tot de Suïssa.
    </p>
    <p class="font">Principalment la nostra tasca està centrada en participar en recreacions arreu de Catalunya i Espanya. Tant en època Napoleònica com Barroca.    </p>
    <p class="font">
      Cal dir que estem oberts a tothom sense excepció. Tant homes, com dones i nens. Tothom pot ocupar qualsevol paper dins la recreació, les dones també poden fer els papers de soldat, heroïna de Santa Bàrbara, dona d’ època, aiguadera, o cantinera.
      </p>
      <p class="font">També realitzem xerrades a les escoles per tal d’explicar de manera amena la nostra història, caracteritzats i caracteritzades com a personatges de la història de la nostra ciutat, ubicant llocs on podem reconèixer petits o grans llocs que encara es conserven.
      </p>
      <p class="font">Pel que fa a l’època Napoleònica recreem diferents col·lectius d’ aquella època: El II terç de Miquelets de Girona (Unitat de voluntaris del territori), la Companyia de dones de Santa Bàrbara (Unitat de dones encarregades de socórrer i proveir als defensors), i per últim el 7é Regiment de Ligne Francès (unitat de l’exèrcit napoleònic que va formar part de les tropes assetjants, present en moltes de les accions napoleòniques a Catalunya).També estem preparant recuperar una unitat civil “la creuada Gironina” formada per els ciutadans de la ciutat tant civils com religiosos.

      </p>
      <p class="font">En època barroca recreem el Regiment de Fusellers de Muntanya del Coronel Jaume Molins.
      </p>
  </div>

   </React.Fragment>
  )
}
