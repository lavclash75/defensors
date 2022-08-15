import React from 'react'
import { Link } from 'react-router-dom'
export default function Galeria() {
    
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

 
    </React.Fragment>
  )
}
