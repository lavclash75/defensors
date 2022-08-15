import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contacte from './Contacte'
import Galeria from './Galeria'
import Home from './Home'
import Napoleonic from './Napoleonic'
import Qui from './Qui'
import Sucessio from './Sucessio'

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Qui" element={<Qui/>}/>
                <Route exact path="/Napoleonic" element={<Napoleonic/>}/>
                <Route exact path="/Sucessio" element={<Sucessio/>}/>
                <Route exact path="/Galeria" element={<Galeria/>}/>
                <Route exact path="/Contacte" element={<Contacte/>}/>
        </Routes>
      </Router>
    </div>
  )
}
